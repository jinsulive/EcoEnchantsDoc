---
title: Effect 基础
titleEn: Effect Basics
category: guide
outline: deep
---

# ⚙️ Effect 基础

> Effect 系统是 libreforge 的核心。本页介绍效果的 YAML 配置结构、各区块如何协同工作，以及所有效果通用的可选参数。

## 两种效果类型

| 类型 | 说明 |
|------|------|
| **触发型（Triggered）** | 需要至少一个[触发器](../triggers/)才能激活 |
| **永久型（Permanent）** | 满足所有[条件](../conditions/)（可选）时始终生效——无需触发器 |

## 效果配置示例

```yaml
effects:
  - id: spawn_particle
    args:
      amount: 10
      particle: soul
      chance: 25
    triggers:
      - mine_block
    filters:
      blocks:
        - diamond_ore
        - deepslate_diamond_ore
    mutators:
      - id: translate_location
        args:
          add_x: 0.5
          add_y: 0.5
          add_z: 0.5
    conditions:
      - id: below_y
        args:
          y: 10
```

**效果说明：** 当玩家在 Y 轴 10 层以下开采钻石矿石时，有 25% 概率在矿石中心生成 10 个灵魂粒子。

## Effects 区块

效果（Effect）是被执行的动作——即核心功能，如造成伤害、生成粒子、给予金钱、发送消息等。每个效果包含：

- **`id`** — 决定效果行为（完整列表见[所有效果](../effects/)）
- **`args`** — 配置效果行为的参数（外加下方介绍的可选通用参数）

```yaml
effects:
  - id: spawn_particle # 效果 ID
    args: # 效果参数（来自效果页面）
      amount: 10
      particle: soul
```

## Triggers 区块

触发器（Trigger）是导致效果运行的事件或动作——挖掘方块、攻击实体、受到伤害、跳跃等。**触发型效果至少需要一个触发器。** 永久型效果不使用触发器。

```yaml
    triggers: # 激活此效果的触发器列表（永久型效果不适用）
      - mine_block
```

完整列表见[所有触发器](../triggers/)。

## Filters 区块

过滤器（Filters）通过将触发器限制到特定目标来收窄效果的激活时机。例如，可以将 `mine_block` 触发器过滤为仅开采钻石矿石时生效，或将 `melee_attack` 触发器过滤为仅攻击僵尸时生效。可用的过滤器取决于所使用的触发器。

```yaml
    filters: # 应用于触发器的过滤器列表
      blocks: # 例如 mine_block 触发器上的 "blocks" 过滤器
        - diamond_ore
        - deepslate_diamond_ore
```

## Conditions 区块

条件（Conditions）是效果激活前必须满足的要求。它们检查玩家的 Y 轴高度、所在世界、是否拥有权限等。每个效果持有者（护符、重铸、附魔等）都有自己的条件，你也可以指定与持有者条件完全相同的**效果级条件**。

```yaml
    conditions: # （可选）效果级条件
      - id: below_y
        args:
          y: 10
```

## Mutators 区块

变异器（Mutators）在效果运行**之前**修改传给效果的数据。它们可以改变位置、受害者或玩家等参数。例如，`translate_location` 变异器可以移动粒子的生成位置。与效果和条件一样，变异器由 ID 和参数组成。

```yaml
    mutators: # （可选）变异传给效果的数据
      - id: translate_location
        args:
          add_x: 0.5
          add_y: 0.5
          add_z: 0.5
```

## 可选参数（通用）

以下所有参数都放在效果的 `args` 区块内：

### 触发概率 Chance

```yaml
args:
  chance: 50 # （可选）效果激活的概率，百分比（默认 100）
```

### 花费 Cost

```yaml
args:
  cost: 200 # （可选）激活此效果所需的金钱，需要 Vault（默认 0）
```

### 每隔 Every

```yaml
args:
  every: 3 # （可选）每触发 x 次激活一次效果（默认总是）
```

### 要求 Require

```yaml
args:
  require: '%ecobits_crystals% > 4' # （可选）要求表达式为真才会运行效果
```

### 冷却 Cooldown

```yaml
args:
  cooldown: 10 # 两次效果激活之间的冷却时间（秒，默认 0）
  cooldown_group: magic_abilities # （可选）冷却组；未设置则只对该效果生效
  send_cooldown_message: true # （可选）是否发送冷却提示消息
  cooldown_message: "自定义冷却消息，剩余 %seconds% 秒" # （可选）自定义冷却消息
  cooldown_effects: # （可选）处于冷却中时运行的效果
    - id: send_message
      args:
        message: "冷却中！请在 &a%seconds%&r 秒后再试。"
```

### 法力消耗 Mana Cost

```yaml
args:
  mana_cost: 10 # （可选）激活所需法力，需要 AuraSkills（默认 0）
```

对于 EcoSkills，可使用 `<magic>_cost`（如 `mana_cost`）指定魔法消耗（默认 0）。

### 延迟 Delay

```yaml
args:
  delay: 20 # （可选）执行效果前等待的刻数（tick，默认 0）
```

### 重复 Repeat

```yaml
args:
  repeat: # （可选）效果将重复激活，若设置了 delay 则在每次重复间延迟
    times: 5 # 效果重复的次数
    start: -10 # %repeat_count% 占位符的初始值
    increment: 10 # 每次重复时计数增加（或减少）的量
```

如果效果带有变异器，每次重复都会重新运行。这提供了新占位符：`%repeat_times%`、`%repeat_start%`、`%repeat_increment%` 和 `%repeat_count%`。

### 价格 Price

```yaml
args:
  price: # （可选）激活此效果所需的价格，支持金钱、物品、点数、第二货币等
    value: 100 * %player_y% # 价格值，支持数学表达式
    type: crystals # 价格类型
    display: "&b%value% 水晶 ❖" # 价格的显示名称
```

更多信息见[价格系统](../guide/effect-basics#价格系统-price-system)。

### 运行顺序 Run Order

```yaml
args:
  run-order: early # （可选）效果的运行顺序：start、early、normal、late 或 end
```

效果有默认运行顺序（用于让效果正确协同），但此选项可覆盖它们——例如让 `add_damage`（默认 `late`）在 `damage_multiplier`（默认 `normal`）之前运行。

### 高级选项 Advanced Options

```yaml
args:
  filters_before_mutation: true # （可选）在未变异的数据上运行过滤器，而非变异之后（默认 false）
  disable_antigrief_check: true # （可选）为此效果禁用防破坏（antigrief）插件检查（默认 false）
  custom_<id>: # （可选）使用自定义效果参数
    <arg 1>: <value>
    <arg 2>: <value>
```

## 占位符与数学表达式

**任何数值（整数、小数）都可以是包含占位符的数学表达式！**

例如：`chance: 100 - %player_y%`——永久型效果在激活时计算表达式，触发型效果在每次触发时计算。请只对数值类占位符使用数学表达式，否则会出现异常行为。

如果受害者是玩家，还可以使用任何带 `victim_` 前缀的占位符（如 `%victim_player_y%`）。

### 额外占位符

| 占位符 | 值 | 别名 |
|--------|-----|------|
| `%trigger_value%` | 触发器传递的值（如造成的伤害量） | `%triggervalue%`、`%trigger%`、`%value%`、`%tv%`、`%v%`、`%t%` |
| `%alt_trigger_value%` | 触发器传递的替代值 | `%alttriggervalue%`、`%altvalue%`、`%atv%`、`%av%`、`%at%` |
| `%player%` | 玩家名称 | — |
| `%player_uuid%` | 玩家的 UUID | — |
| `%victim_health%` | 受害者的生命值 | — |
| `%victim_max_health%` | 受害者的最大生命值 | — |
| `%distance%` | 玩家与受害者之间的距离 | — |
| `%victim_level%` | 受害者的等级（**需要 LevelledMobs**） | — |
| `%hits%` | 玩家击中受害者的次数 | — |
| `%text%` | 触发器传来的消息文本，例如聊天消息 | `%string%`、`%message%` |
| `%location_x%` | 位置的 X 坐标 | `%loc_x%`、`%x%` |
| `%location_y%` | 位置的 Y 坐标 | `%loc_y%`、`%y%` |
| `%location_z%` | 位置的 Z 坐标 | `%loc_z%`、`%z%` |
| `%location_block_x%` | 方块位置的 X 坐标 | `%loc_b_x%`、`%block_x%`、`%bx%` |
| `%location_block_y%` | 方块位置的 Y 坐标 | `%loc_b_y%`、`%block_y%`、`%by%` |
| `%location_block_z%` | 方块位置的 Z 坐标 | `%loc_b_z%`、`%block_z%`、`%bz%` |
| `%location_world%` | 位置所在的世界名称 | `%loc_w%`、`%world%` |

### 数学语法

数学表达式几乎随处可用。常用语法：`()`、`+`、`-`、`/`、`*`、`^`、`round()`、`ceil()`、`floor()`、`random(min,max)`、`min()`、`max()`。

## 加载权重 Load Weight

所有配置默认按字母顺序加载。如果一个配置依赖另一个配置，可以添加 `load-weight: <weight>` 改变加载顺序。所有配置的默认加载权重为 **100**，按升序加载——权重 10 的配置先于权重 20 的配置加载。

## 关联页面

- [EcoEnchants 专属](./ecoenchants-specific) — 附魔如何使用效果系统
- [所有效果](../effects/) — 全部效果参考
- [效果链](./effect-basics) — 将多个效果串联
