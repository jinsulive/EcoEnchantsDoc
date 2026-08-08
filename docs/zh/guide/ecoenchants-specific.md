---
title: EcoEnchants 专属
titleEn: EcoEnchants Specific
category: guide
outline: deep
---

# 🔮 EcoEnchants 专属

> EcoEnchants 是构建在 eco 与 libreforge 之上的附魔插件。本页说明附魔如何配置、效果系统如何与附魔等级集成，以及 EcoEnchants 对效果系统的专属补充。

## 附魔配置文件

每个附魔都是位于 `/enchants/` 文件夹下的独立配置文件。你可以自由添加或删除——内置的 `_example.yml` 示例配置会帮你上手。

**附魔的 ID 就是文件名。** 它用于指令和物品查找系统（Item Lookup System）。ID 只能包含小写字母、数字和下划线。

## 附魔配置示例

```yaml
display-name: "Example"
description:
  - "Gives a &a%placeholder%%&8 bonus to damage"
placeholder: "%level% * 20"
placeholders:
  example: "%level% * 800"
type: normal

targets:
  - sword
conflicts:
  - sharpness
required:
  - unbreaking
rarity: common
max-level: 4
tradeable: true
discoverable: true
enchantable: true
effects:
  - id: damage_multiplier
    args:
      multiplier: 1 + 0.2 * %level%
    triggers:
      - melee_attack

conditions: [ ]
```

## 附魔显示区块

```yaml
display-name: "Example" # 附魔在游戏中的名称
description:
  - "Gives a &a%placeholder%%&8 bonus to damage" # 附魔的描述
placeholder: "%level% * 20" # 在附魔描述中显示的占位符
placeholders: # [可选] 你也可以创建多个占位符
  example: "%level% * 800"
type: normal # 附魔类型，来自 types.yml
```

## 附魔机制区块

```yaml
targets: # 可以应用此附魔的物品，参见 targets.yml
  - sword
conflicts: # 与此附魔冲突的附魔
  - sharpness
required: # 应用此附魔前必须已存在的附魔
  - unbreaking
rarity: common # 附魔的稀有度，参见 rarity.yml
max-level: 4 # 附魔的最高等级
```

## 获取方式

```yaml
tradeable: true # 能否从村民处交易获得
discoverable: true # 能否在战利品箱中自然生成
enchantable: true # 能否从附魔台获得
```

## Effects 区块

Effects 区块是附魔的核心功能。你可以在这里配置 effects、conditions、filters、mutators 和 triggers，让它们在附魔激活期间运行。**使用 `%level%` 作为附魔等级的占位符。**

```yaml
# 附魔的效果（即功能）
# 参见：https://plugins.auxilor.io/effects/configuring-an-effect
# 使用 %level% 作为附魔等级占位符
effects:
  - id: damage_multiplier
    args:
      multiplier: 1 + 0.2 * %level%
    triggers:
      - melee_attack

# 使用附魔所需的条件，
# 这里同样可以使用 %level% 占位符
conditions: [ ]
```

### 基于等级的缩放

`%level%` 占位符返回自定义附魔的等级。它是创建随等级增强的附魔的关键。配合数学表达式可以实现强大的缩放：

```yaml
effects:
  - id: damage_multiplier
    args:
      multiplier: 1 + 0.2 * %level%   # 1 级时 1.2 倍，2 级时 1.4 倍，以此类推
    triggers:
      - melee_attack
```

::: tip 💡 提示
任何数值参数都可以在数学表达式中使用 `%level%`。永久型效果在激活时计算；触发型效果在每次触发时计算。
:::

## 内部占位符

| 占位符 | 值 |
|--------|-----|
| `%level%` | 返回自定义附魔的等级。用于创建随等级增强的附魔。 |

## 附魔类型

原版 Minecraft 有 2 种类型：**普通（Normal）** 和 **诅咒（Curse）**。EcoEnchants 扩展了附魔玩法：

| 类型 | 说明 |
|------|------|
| **普通 Normal** | 直白明了，通常让物品变得更强 |
| **诅咒 Curse** | 与普通相反——让物品变得更弱 |
| **特殊 Special** | 比普通更强；默认每件物品只能有一个特殊附魔，迫使玩家特化物品 |
| **法术 Spell** | 手持物品时按住 alt 点击（右键）激活的能力；每次激活后进入冷却 |
| **工艺品 Artifact** | 纯装饰附魔；根据所附物品生成粒子效果 |

你可以在 `types.yml` 中创建任意数量的附魔类型。

## 稀有度 Rarity

稀有度对玩家基本不可见，用于控制附魔的获取方式。一种稀有度由以下值构成：

- 从附魔台获得该附魔所需的最低经验等级
- 超过最低等级后每次附魔应用该附魔的百分比概率
- 村民生成该附魔交易的百分比概率
- 战利品箱物品生成该附魔的百分比概率

所有值都可在 `rarity.yml` 中完全配置；可以任意创建、编辑和删除稀有度。

## 获取途径

默认情况下，所有附魔都可以从**附魔台**、**村民**和**战利品箱**获得——每个附魔可单独配置。等级根据成本计算；战利品箱通常包含更高等级的附魔。某些类型（默认是特殊类）被设置为极难获得 1、2 级以上。

## 目标 Targets

目标是可被附魔的物品——近战武器、工具、护甲件、鞘翅、钓鱼竿等。在 `targets.yml` 中创建自己的目标（例如钻石/下界合金专属附魔）。

对于配置创建的自定义附魔，需要为目标指定槽位，在物品列表中添加额外条目：

```yaml
- slot: hands  # 用于检查手持物品的附魔（工具、武器、弓、三叉戟）
- slot: armor  # 用于检查护甲的附魔
- slot: any    # 用于在物品栏任意位置生效的附魔
```

## EcoEnchants 专属触发器

| 触发器 | 说明 | 值 |
|--------|------|-----|
| `enchant_<type>` | 使用特定类型附魔附魔物品时触发（如 `enchant_normal`） | `value: XP 花费` |

📝 **编者注：** EcoEnchants 没有插件专属的 Conditions 或 Mutators——它使用共享的 libreforge 库。它**确实**带有 1 个专属效果（`apply_random_enchant`）和 1 个专属触发器（`enchant_<type>`），详见下文。

## 源码级配置细节

以下细节直接来自 EcoEnchants 源码，官方 wiki 中并未覆盖。

### 插件依赖（`dependencies`）

附魔可以声明它依赖的插件名列表：

```yaml
dependencies:
  - EcoSkills
  - MMOCore
```

如果列表中任何插件**未安装**，该附魔将加载失败（`MissingDependencyException`）。热重载时会提示你安装缺失的插件；预加载的附魔则会被静默跳过。

> 源码：`enchant/impl/LibreforgeEcoEnchant.kt:26-34`（`init` 中的依赖检查）、`enchant/EcoEnchants.kt:70-72, 89-91`。

### 没有 `effects` 键的附魔不会加载

`/enchants/` 下的配置文件如果没有 `effects` 键，会被完全忽略：

```kotlin
if (!config.has("effects")) {
    return
}
```

也就是说，只写了显示/稀有度/获取方式的配置不会被注册为附魔。你可以借此把"禁用"或未完成的附魔留在文件夹里而不生效。

> 源码：`enchant/EcoEnchants.kt:59-61` 与 `78-80`（`acceptPreloadConfig` / `acceptConfig`）。

### 自动占位符 `%<id>_name%`

每个已注册的附魔都会自动注册占位符 `%<id>_name%`，返回该附魔格式化后的显示名称：

```kotlin
PlayerlessPlaceholder(plugin, "${id}_name") {
    this.getFormattedName(0, false)
}.register()
```

例如 ID 为 `razor` 的附魔，占位符就是 `%razor_name%`。

> 源码：`enchant/impl/EcoEnchantBase.kt:103-105`。

### 自动权限 `ecoenchants.fromtable.<id>`

每个附魔都会自动注册 Bukkit 权限节点 `ecoenchants.fromtable.<id>`（默认为 `true`），以及通配父权限 `ecoenchants.fromtable.*`。该权限控制玩家能否从附魔台获得这个附魔。

> 源码：`enchant/impl/EcoEnchantBase.kt:108-131`，检查点：`mechanics/EnchantingTableSupport.kt:89`。

### `conflicts` 支持 `all` / `everything` 通配

在 `conflicts` 列表中写入 `all` 或 `everything`（不区分大小写），会让该附魔与**所有**其他附魔冲突：

```yaml
conflicts:
  - all
```

此外，冲突判定是**双向**且不区分大小写的；`required` 前置附魔列表同样不区分大小写。

> 源码：`enchant/impl/EcoEnchantBase.kt:50-53`（`conflictsWithEverything`）、`147-155`。

### 附魔能否应用（`canEnchantItem`）的判定规则

`canEnchantItem`（附魔台、铁砧与 `apply_random_enchant` 都会用到）要求**同时满足**以下条件：

- 物品上同**类型**的附魔数量低于该类型的 `limit`（来自 `types.yml`）；
- 物品上的任何附魔都与它**不冲突**（双向，包括 `all`/`everything` 通配）；
- `required` 中的前置附魔都已存在；
- 附魔总数低于 `config.yml` 中的 `anvil.enchant-limit`；
- 物品是附魔书，或匹配该附魔的某个 `targets`。

> 源码：`enchant/EcoEnchantLike.kt:58-89`。

### `enchant_<type>` 触发器延迟 2 tick 检测

`enchant_<type>` 触发器不会在 `EnchantItemEvent` 时立即触发——它会**延迟 2 tick**（`runLater(..., 2)`）再检查，让原版附魔逻辑先完成。`value` 参数是经验等级花费，`text` 是附魔类型 ID。

> 源码：`libreforge/TriggerEnchantType.kt:42-59`。

### EcoEnchants 专属效果：`apply_random_enchant`

EcoEnchants 自带 1 个专属效果：`apply_random_enchant`。它会给触发物品应用一个随机附魔：

```yaml
- id: apply_random_enchant
  args:
    types: []          # 可选：仅限这些附魔类型
    rarities: []       # 可选：仅限这些稀有度
    enchants: []       # 可选：仅限这些附魔 ID
    allow_unsafe: false # 为 true 时忽略目标/冲突/等级上限限制
```

如果 `types`、`rarities`、`enchants` 均为空，则任何附魔都可能被选中；`allow_unsafe: false` 时只会选择物品正常能承受的附魔。随机等级在 1 与该附魔 `max-level` 之间（附魔书会写入 stored enchant）。

> 源码：`libreforge/EffectApplyRandomEnchant.kt:15-88`。

### `%level%` 的注入机制

`%level%` 之所以能在 effects、conditions 和描述占位符中使用，是因为 EcoEnchants 为 `EcoEnchantLevel` 注册了**持有者占位符提供器**，把附魔等级作为 `level` 具名值暴露出来：

```kotlin
registerHolderPlaceholderProvider<EcoEnchantLevel> { it, _ ->
    listOf(NamedValue("level", it.level))
}
```

每个附魔等级都是一个 libreforge *持有者（holder）*；当绑定该持有者的效果或条件运行时，`%level%` 就求值为对应附魔等级。在附魔描述中，`level` 还会被直接注入到 `placeholders` 表达式里（`EcoEnchantLike.getRawDescription`）。

> 源码：`EcoEnchantsPlugin.kt:84-88`、`enchant/EcoEnchantLike.kt:111-118`。

### 原版附魔同样可配置

原版附魔可以在 `vanillaenchants.yml` 中自定义——每个条目可设置 `max-level` 与 `conflicts`：

```yaml
sharpness:
  max-level: 10
  conflicts: [ ]
```

> 源码：`enchant/VanillaEnchantments.kt:7-15`。

### 细粒度发现方式与 GUI 可见性

除了布尔值的 `discoverable`，还可以用映射表分别限制每种发现方式——缺失的子键默认为 `true`，写 `false` 则禁用全部方式：

```yaml
discoverable:
  chests: true
  fishing: true
  mob-drops: true
  raids: true
hide-from-enchantgui: false
```

`hide-from-enchantgui: true` 会在 `/enchants` GUI 中隐藏该附魔。

> 源码：`enchant/impl/EcoEnchantBase.kt:89-99`。

## 插件配置要点

主 `config.yml` 控制附魔台、村民、战利品、铁砧、显示、GUI 等行为：

```yaml
enchanting-table:
  enabled: true
  book-multiplier: 0.5
  maximum-obtainable-level: 30
  cap: 5
  reduction: 2.2

anvil:
  cost-exponent: 0.95 # 参见下方"高级配置"
  enchant-limit: -1
  max-repair-cost: 40
  clamp-repair-cost: true
```

## 高级配置：成本指数 Cost Exponent

成本指数是铁砧的一项功能，可基于原始成本增加或减少消耗：

```go
cost = level^exponent + 1
```

指数为 `1.02`、原始成本为 `25` 时：`25^1.02 + 1 = 28`（向上取整）。

| 指数 | 难度 |
|------|------|
| `0.8` | 简单 |
| `0.9` | 平衡 |
| `1.0` | 接近原版 |
| `1.2` | 更难 |

## 高级配置：类型偏置 Type Bias

你可以按曲线偏置附魔等级，使某些类型（如特殊）极其稀有。系统生成 0 到 1 之间的随机数，然后按曲线偏置——更多输入产生更低输出，0.7 可能变成 0.1，只有 0.99 这样的极高输入才会变成 0.6 以上。偏置越接近 1，低级附魔越常见；越接近 -1，高级附魔越常见。

## 关联页面

- [Effect 基础](./effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
