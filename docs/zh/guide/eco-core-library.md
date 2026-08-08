---
title: Eco 核心库
titleEn: Eco Core Library
category: guide
outline: deep
---

# ⚙️ Eco 核心库

> **eco** 库是所有 Auxilor 系列插件共享的核心底座。它提供了效果/条件参数中使用的数学表达式引擎、价格系统、点数、物品等级数据等能力。本页直接取材于 eco 源码，记录官方 wiki 未覆盖的功能细节。

## 数学表达式

libreforge 中几乎所有数值参数都接受**数学表达式**。表达式只会编译一次并缓存，且可以包含 `%占位符%`、函数、常量与运算符。

### 函数

**一元函数**（单个参数，前缀写法）：

| 函数 | 含义 | 备注 |
|------|------|------|
| `sin(x)`、`cos(x)`、`tan(x)` | 三角函数 | 弧度制 |
| `asin(x)`、`acos(x)`、`atan(x)` | 反三角函数 | 弧度制 |
| `sinh(x)`、`cosh(x)`、`tanh(x)` | 双曲三角函数 | |
| `abs(x)` | 绝对值 | |
| `round(x)` | 四舍五入到整数 | |
| `floor(x)` / `ceil(x)` | 向下 / 向上取整 | |
| `sqrt(x)` | 平方根 | |
| `cbrt(x)` | 立方根 | |
| `log(x)` | **自然**对数（ln） | 不是以 10 为底 |
| `rand(x)` | `[0, x)` 范围内的随机值 | 非确定性 |

**二元函数**（逗号分隔参数）：

| 函数 | 含义 |
|------|------|
| `min(a, b)` | 取 `a`、`b` 中较小者 |
| `max(a, b)` | 取 `a`、`b` 中较大者 |
| `random(a, b)` | `[a, b]` 范围内的随机值 |

### 常量

| 常量 | 值 |
|------|-----|
| `PI` | π（3.14159…） |
| `E` | 自然常数（2.71828…） |
| `TRUE` | `1.0` |
| `FALSE` | `0.0` |

### 运算符

| 运算符 | 含义 | 备注 |
|--------|------|------|
| `+` `-` `*` `/` | 算术运算 | |
| `^` | 幂运算 | 右结合 |
| `%` | 取模 | |
| `E` | 科学计数法（`a E b` = `a × 10^b`） | 右结合，例如 `2E3` = `2000` |
| `<` `>` `=` `==` `!=` `>=` `<=` | 比较运算 | 结果为 `1.0`/`0.0` |
| `&` `&&` | 布尔与 | `1.0`/`0.0` |
| `\|` `\|\|` | 布尔或 | `1.0`/`0.0` |
| `!` | 布尔非（前缀） | `1.0`/`0.0` |
| `-` | 取负（前缀） | |

**示例：**

```yaml
multiplier: "1 + 0.2 * %level%"       # 随等级缩放
damage: "min(10, 2 * %level%)"        # 封顶缩放
speed: "%player_y% / 10 + rand(5)"    # 玩家占位符 + 随机
chance: "10 + 5 * (PI > 3)"           # 15（比较结果为 1）
```

> 源码：`eco-core/core-plugin/.../internal/spigot/math/token/BinaryOperator.kt`、`UnaryOperator.kt`、`Constant.kt`、`functional/ExpressionEnv.kt`（注册 `min`/`max`/`random`）。

### 表达式中的占位符

`%placeholder%` 标记会在求值前解析为数字。任何占位符都可以使用——玩家占位符如 `%player_y%`、持有者占位符如 `%level%`，或在 eco 中注册的 PAPI 占位符。表达式引擎（`ExpressionEvaluator`）会缓存已编译的表达式和最近的结果。

> 源码：`eco-core/core-plugin/.../internal/spigot/math/ExpressionEvaluator.kt`（`findPlaceholders`、结果缓存）、`eco-api/.../util/NumberUtils.java`（`evaluateExpression`）。

## 价格系统 Price

**价格（Price）** 是"数值 + 货币类型"的组合。价格由 `value` 表达式和 `type` 名称创建——效果的通用 `price` 参数、`pay_price`、`give_price`、`can_afford_price` 都会用到。

### 类型解析（回退顺序）

`Prices.create(value, type)` 按以下顺序解析类型：

1. **没有 type**（`null`）→ 默认使用**经济**（Vault/Treasury）。
2. **已注册工厂**的名称 → 使用该工厂（别名见下）。
3. **否则** → 把 type 当作**物品**处理（`Items.lookup(type)`）：
   - 物品查找失败 → 价格变为**免费**（`PriceFree`）；
   - 查找成功 → 变为**物品价格**（`PriceItem`），用该物品支付。

```yaml
# 效果 args 中：
price:
  value: 50 + 10 * %level%
  type: xp          # 经验值
price:
  value: 3
  type: diamond     # 任意物品 ID 都可以
```

> 源码：`eco-api/.../core/price/Prices.java:127-155`。

### 内置价格类型与别名

| 类型 | 别名 | 依赖 |
|------|------|------|
| 经济 | `coins`、`$`（缺失 type 时也用它） | Vault/Treasury |
| 经验值 | `xp`、`exp`、`experience` | — |
| 经验等级 | `l`、`levels`、`xplevels`、`explevels` | — |
| Player Points | `player_points`、`p_points` | PlayerPoints |
| CoinsEngine 货币 | `<货币 ID>` | CoinsEngine |
| RoyaleEconomy 货币 | `<货币 ID>` | RoyaleEconomy |
| UltraEconomy 货币 | `<货币名>` | UltraEconomy |

> 源码：`eco-core/core-backend/.../internal/price/PriceFactoryEconomy.kt`、`PriceFactoryXP.kt`、`PriceFactoryXPLevels.kt`；`core-plugin/.../integrations/price/PriceFactoryPlayerPoints.kt` 及 CoinsEngine/RoyaleEconomy/UltraEconomy 工厂；注册位置 `internal/spigot/EcoSpigotPlugin.kt:338-340, 537-553`。

### 价格行为

每种价格都支持相同操作：`canAfford(player, multiplier)`、`pay(player, multiplier)`、`giveTo(player, multiplier)`，以及按玩家生效的 `multiplier`（`getMultiplier`/`setMultiplier`），它会缩放显示数值。`getValue` 始终包含玩家倍率。

> 源码：`eco-api/.../core/price/Price.java`、`price/impl/PriceEconomy.java:68-106`。

## 点数 Points

点数是一种通用的键值货币，按玩家（或全局）存储，可通过 `add_points`、`set_points`、`give_points` 等效果、`above_points` 等条件以及占位符访问。

### 玩家点数与全局点数

- `player.points` 读写**玩家档案**中的数据；
- `globalPoints` 读写**服务器档案**（全体共享）。

点数以**双精度浮点数**存储在 PDC 键 `eco:points_<type>` 中。它们是**按需初始化**的：首次访问某个点数类型时，会自动注册对应的 `PointPriceFactory`，因此每种点数类型都会自动成为价格系统中的合法 `type`，标识符为 `libreforge:point_<type>`。

> 源码：`libreforge/.../Points.kt`（`PointsMap`、`PointPriceFactory`、`globalPoints`、`Player.points`）。

### 点数占位符与友好名称

- `%points_<type>%` —— 玩家 `<type>` 点数的数值（如 `%points_magic%`）；
- `%global_points_<type>%` —— 服务器全局 `<type>` 点数的数值。

可以在插件 `config.yml` 的 `point-names` 中为点数类型改名：

```yaml
point-names:
  magic: "Mana"
```

> 源码：`libreforge/.../Points.kt`（`pointsPlaceholder`、`globalPointsPlaceholder`、`toFriendlyPointName`）。

### 物品点数 Item Points

物品可以携带自己的点数，存储在物品 PDC 的 `libreforge:item_points` 键下。可通过 `give_item_points`、`set_item_points`、`multiply_item_points` 等效果操作，并用 `%item_points_<type>%` 占位符读取。

> 源码：`libreforge/.../ItemPoints.kt`。

## 自定义效果参数（`custom_<id>`）

在效果的 `args` 中，任何以 `custom_` 开头的键**都不是普通参数**——它会委托给在 `/arguments/` 配置目录中注册的**自定义效果参数**：

```yaml
args:
  custom_mycheck:
    is-met:
      - id: above_y
        args:
          y: 100
    if-met:
      - id: send_message
        args:
          message: "你在 Y=100 上方！"
    if-not-met:
      - id: send_message
        args:
          message: "你在 Y=100 下方。"
```

`custom_<id>` 段内的每个键还会被注入为占位符；`is-met` 条件决定执行 `if-met` 还是 `if-not-met` 链。如果参数 ID 未注册，该效果参数会被静默忽略。

> 源码：`libreforge/.../effects/arguments/EffectArguments.kt:23-29`、`effects/arguments/custom/ArgumentCustom.kt`、`effects/arguments/custom/CustomEffectArgument.kt`、`CustomEffectArguments.kt`。

## 效果权重 Weight 与随机链

### `weight` 键

链中的每个效果块都支持顶层 `weight` 键（默认 `1.0`）。它可以写成**数学表达式**，并在每次触发时求值，因此可以使用 `%level%` 等占位符：

```yaml
effects:
  - id: give_xp
    weight: 3
    args:
      amount: 100
    triggers:
      - melee_attack
  - id: give_money
    weight: 1 + %level% / 2
    args:
      amount: 50
    triggers:
      - melee_attack
```

权重只在链以 **`random` 执行器**运行时起作用——此时随机选中一个效果，选中概率与权重成正比。权重为 `0` 的效果不会被选中；若所有权重都为 `0`，则均匀随机选一个。

> 源码：`libreforge/.../effects/Effects.kt:494-500`（默认 `1.0`、支持表达式）、`effects/ChainElement.kt:39-49`（`getWeight` 每次触发重新求值）、`effects/executors/impl/RandomExecutorFactory.kt`。

### 链执行器 Chain Executors

链支持三种执行器（通过插件各自的配置项指定）：

| 执行器 | 行为 |
|--------|------|
| `normal` | 按顺序执行所有效果 |
| `cycle` | 每次只执行一个效果，循环轮换 |
| `random` | 随机执行一个效果，按 `weight` 加权 |

> 源码：`libreforge/.../effects/executors/ChainExecutors.kt`、`impl/NormalExecutorFactory.kt`、`impl/CycleExecutorFactory.kt`、`impl/RandomExecutorFactory.kt`。

## 物品等级 Item Levels

物品可以携带按"等级类型（level type）"追踪的**等级与经验**，等级类型由各插件配置（如 EcoEnchants、EcoArmor）。这是 `level_item`、`level_up_item`、`item_level_*` 条件以及物品等级占位符的基础。

### LevelType 配置

等级类型在配置中定义，支持以下键：

```yaml
id: mylevel
xp-formula: "100 * %level%"      # 从 N 级升到 N+1 级所需经验
max-level: 100
requirements: [ 100, 200, 400 ]  # xp-formula 的替代方案：显式经验列表
level-up-effects:
  - id: play_sound
    args:
      sound: entity_player_levelup
```

- `xp-formula` —— 按等级求值的数学表达式，会注入 `%level%`。
- `requirements` —— 显式经验列表，下标为 `level - 1`。
- `max-level` —— 默认 `Integer.MAX_VALUE`。
- `level-up-effects` —— 每次升级时触发的效果链，带有 `%level%` 与 `%level_numeral%` 占位符。

> 源码：`libreforge/.../levels/LevelType.kt`、`levels/LevelData.kt`。

### PDC 存储

等级数据存储在物品 PDC 的键 **`libreforge:item_levels`** 下。其中每个等级类型有自己的容器，包含两个字段：

- `level` —— `INTEGER`
- `xp` —— `DOUBLE`（向下一级累积的当前经验）

> 源码：`libreforge/.../levels/ItemLevelMap.kt`。

### 物品等级 / 经验 / 进度占位符

以下占位符可用（后缀均为等级类型 ID）：

| 占位符 | 值 |
|--------|-----|
| `%item_level_<type>%` | 当前等级 |
| `%item_xp_<type>%` | 当前等级内的经验 |
| `%item_xp_required_<type>%` | 升到下一级所需经验 |
| `%item_progress_<type>%` | 距下一级的进度百分比 |
| `%item_points_<type>%` | 物品 `<type>` 点数的数值 |
| `%item_data_<type>%` | 物品 `<type>` 自定义数据的字符串 |

每个占位符还支持 `_numeral` 后缀，例如 `%item_level_mylevel_numeral%`，将数值渲染为罗马数字。

> 源码：`libreforge/.../levels/placeholder/ItemPointPlaceholder.kt`、`ItemPointPlaceholders.kt`。

## 物品数据 Item Data

物品可以在 PDC 的 `libreforge:item_data` 键下存储任意**字符串**键值数据，通过 `set_item_data`、`remove_item_data`、`has_item_data` 操作，并用 `%item_data_<type>%` 读取。

> 源码：`libreforge/.../ItemData.kt`。

## 关联页面

- [Effect 基础](./effect-basics)
- [EcoEnchants 专属](./ecoenchants-specific)
- [所有效果](../effects/)
