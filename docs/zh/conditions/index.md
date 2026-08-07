---
title: 所有条件
titleEn: All Conditions
category: conditions
outline: deep
---

# 🔒 所有条件

> 条件（Conditions）是效果激活前必须满足的要求。它们允许你通过检查玩家的权限、Y 轴高度、世界、生命值等来控制效果的运行时机。本节包含 libreforge 与 EcoEnchants 系统中所有可用 **条件（Conditions）** 的完整参考。

::: tip 如何使用本页
点击下方任意卡片查看完整参数参考。可使用浏览器搜索（<kbd>Ctrl</kbd>+<kbd>F</kbd>）快速定位。
:::

## 条件基础

与效果和变异器一样，条件由 **ID** 和 **参数（arguments）** 组成：

```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp"
```

### 反向参数 Inverse

所有条件都有一个可选的 `inverse` 参数，用于取反条件——仅当基础条件为假时才为真：

```yaml
- id: on_fire
  args:
    inverse: true # （可选）取反条件
```

### 未满足提示行 Not-Met Lines

对于物品插件（EcoEnchants、EcoItems、Reforges、Talismans、EcoArmor），你可以添加条件未满足时显示给玩家的物品说明行：

```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp"
    not-met-lines: # （可选）条件未满足时显示的说明行（仅物品插件）
      - "&c你需要 &bMVP&c 权限才能使用 &7Crystal Finder"
```

### 未满足效果 Not-Met Effects

对于效果级条件，你可以指定当条件未满足但玩家尝试激活效果时运行的效果：

```yaml
effects:
  - id: give_money
    args:
      amount: 100
    conditions:
      - id: has_permission
        args:
          permission: "ecomc.rank.mvp"
        not-met-effects: # （可选）条件未满足时运行的效果
          - id: send_message
            args:
              message: "&c你需要 &bMVP&c 权限！"
    triggers:
      - break_block
```

### 目标条件 Victim Conditions

使用 `victim_conditions` 过滤器在运行效果前检查目标（受害者）是否满足条件：

```yaml
effects:
  - id: give_money
    args:
      amount: 100
    filters:
      victim_conditions:
        - id: in_mainhand
          args:
            items:
              - DIAMOND_SWORD
    conditions:
      - id: below_y
        args:
          y: 0
    triggers:
      - melee_attack
```

## 📊 概览

| 分类 | 数量 | 说明 |
|------|------|------|
| 玩家状态 | 20 | 玩家状态：生命、饥饿、飞行、潜行等 |
| 世界与环境 | 15 | 世界、生物群系、天气、时间、光照 |
| 物品与装备 | 15 | 手持物品、穿戴护甲、附魔 |
| 经济与点数 | 15 | 余额、点数、价格、货币 |
| 权限与称号 | 5 | 权限和称号检查 |
| 位置与移动 | 10 | Y 轴高度、位置、区域、领地 |
| 占位符与数学 | 5 | 占位符比较和表达式 |
| 高级逻辑 | 5 | any_of、at_least_of 等 |

---

## 🗂️ 按分类浏览

### 玩家状态条件

<div class="card-grid">

<div class="card">
  <h3><a href="./is_sneaking">潜行（Is Sneaking）</a></h3>
  <p>要求玩家处于潜行状态。</p>
</div>

<div class="card">
  <h3><a href="./is_sprinting">疾跑（Is Sprinting）</a></h3>
  <p>要求玩家处于疾跑状态。</p>
</div>

<div class="card">
  <h3><a href="./is_flying">飞行（Is Flying）</a></h3>
  <p>要求玩家处于飞行状态。</p>
</div>

<div class="card">
  <h3><a href="./is_gliding">滑翔（Is Gliding）</a></h3>
  <p>要求玩家处于滑翔状态（鞘翅）。</p>
</div>

<div class="card">
  <h3><a href="./is_swimming">游泳（Is Swimming）</a></h3>
  <p>要求玩家处于游泳状态。</p>
</div>

<div class="card">
  <h3><a href="./on_ground">在地面（On Ground）</a></h3>
  <p>要求玩家站在地面上。</p>
</div>

<div class="card">
  <h3><a href="./in_air">在空中（In Air）</a></h3>
  <p>要求玩家处于空中。</p>
</div>

<div class="card">
  <h3><a href="./is_alive">存活（Is Alive）</a></h3>
  <p>要求玩家存活。</p>
</div>

<div class="card">
  <h3><a href="./is_op">OP（Is OP）</a></h3>
  <p>要求玩家是服务器管理员。</p>
</div>

<div class="card">
  <h3><a href="./on_fire">着火（On Fire）</a></h3>
  <p>要求玩家着火。</p>
</div>

<div class="card">
  <h3><a href="./is_frozen">冰冻（Is Frozen）</a></h3>
  <p>要求玩家处于冰冻状态。</p>
</div>

<div class="card">
  <h3><a href="./is_falling">下落（Is Falling）</a></h3>
  <p>要求玩家处于下落状态。</p>
</div>

<div class="card">
  <h3><a href="./is_submerged">浸没（Is Submerged）</a></h3>
  <p>要求玩家浸没在水中。</p>
</div>

<div class="card">
  <h3><a href="./above_health_percent">生命高于（Above Health Percent）</a></h3>
  <p>要求生命值高于某个百分比。</p>
</div>

<div class="card">
  <h3><a href="./below_health_percent">生命低于（Below Health Percent）</a></h3>
  <p>要求生命值低于某个百分比。</p>
</div>

<div class="card">
  <h3><a href="./above_hunger_percent">饥饿高于（Above Hunger Percent）</a></h3>
  <p>要求饥饿值高于某个百分比。</p>
</div>

<div class="card">
  <h3><a href="./below_hunger_percent">饥饿低于（Below Hunger Percent）</a></h3>
  <p>要求饥饿值低于某个百分比。</p>
</div>

<div class="card">
  <h3><a href="./in_gamemode">游戏模式（In Gamemode）</a></h3>
  <p>要求玩家处于特定游戏模式。</p>
</div>

</div>

### 世界与环境条件

<div class="card-grid">

<div class="card">
  <h3><a href="./in_world">在世界（In World）</a></h3>
  <p>要求玩家在某个世界中。</p>
</div>

<div class="card">
  <h3><a href="./in_biome">生物群系（In Biome）</a></h3>
  <p>要求玩家在某个生物群系中。</p>
</div>

<div class="card">
  <h3><a href="./in_water">在水中（In Water）</a></h3>
  <p>要求玩家在水中。</p>
</div>

<div class="card">
  <h3><a href="./in_lava">在岩浆中（In Lava）</a></h3>
  <p>要求玩家在岩浆中。</p>
</div>

<div class="card">
  <h3><a href="./in_rain">下雨（In Rain）</a></h3>
  <p>要求正在下雨。</p>
</div>

<div class="card">
  <h3><a href="./is_night">夜晚（Is Night）</a></h3>
  <p>要求处于夜晚。</p>
</div>

<div class="card">
  <h3><a href="./is_storm">暴风雨（Is Storm）</a></h3>
  <p>要求处于暴风雨天气。</p>
</div>

<div class="card">
  <h3><a href="./light_level_below">光照低于（Light Level Below）</a></h3>
  <p>要求光照等级低于某个值。</p>
</div>

<div class="card">
  <h3><a href="./standing_on_block">站在方块上（Standing On Block）</a></h3>
  <p>要求站在特定方块上。</p>
</div>

<div class="card">
  <h3><a href="./in_block">在方块内（In Block）</a></h3>
  <p>要求玩家位于特定方块内。</p>
</div>

</div>

### 位置与移动条件

<div class="card-grid">

<div class="card">
  <h3><a href="./above_y">Y 轴以上（Above Y）</a></h3>
  <p>要求玩家高于某个 Y 轴高度。</p>
</div>

<div class="card">
  <h3><a href="./below_y">Y 轴以下（Below Y）</a></h3>
  <p>要求玩家低于某个 Y 轴高度。</p>
</div>

<div class="card">
  <h3><a href="./near_entity">靠近实体（Near Entity）</a></h3>
  <p>要求半径内有某个实体。</p>
</div>

<div class="card">
  <h3><a href="./within_radius_of">半径范围内（Within Radius Of）</a></h3>
  <p>要求在某个位置的半径范围内。</p>
</div>

<div class="card">
  <h3><a href="./riding_entity">骑乘实体（Riding Entity）</a></h3>
  <p>要求骑乘特定实体。</p>
</div>

</div>

### 物品与装备条件

<div class="card-grid">

<div class="card">
  <h3><a href="./in_mainhand">主手物品（In Mainhand）</a></h3>
  <p>要求主手持有特定物品。</p>
</div>

<div class="card">
  <h3><a href="./in_offhand">副手物品（In Offhand）</a></h3>
  <p>要求副手持有特定物品。</p>
</div>

<div class="card">
  <h3><a href="./in_slot">槽位物品（In Slot）</a></h3>
  <p>要求某个槽位有特定物品。</p>
</div>

<div class="card">
  <h3><a href="./has_item">拥有物品（Has Item）</a></h3>
  <p>要求玩家拥有某物品。</p>
</div>

<div class="card">
  <h3><a href="./has_enchant">拥有附魔（Has Enchant）</a></h3>
  <p>要求物品带有特定附魔。</p>
</div>

<div class="card">
  <h3><a href="./has_potion_effect">拥有药水效果（Has Potion Effect）</a></h3>
  <p>要求玩家拥有某药水效果。</p>
</div>

<div class="card">
  <h3><a href="./wearing_helmet">戴头盔（Wearing Helmet）</a></h3>
  <p>要求佩戴特定头盔。</p>
</div>

<div class="card">
  <h3><a href="./wearing_chestplate">穿胸甲（Wearing Chestplate）</a></h3>
  <p>要求穿着特定胸甲。</p>
</div>

<div class="card">
  <h3><a href="./wearing_leggings">穿护腿（Wearing Leggings）</a></h3>
  <p>要求穿着特定护腿。</p>
</div>

<div class="card">
  <h3><a href="./wearing_boots">穿靴子（Wearing Boots）</a></h3>
  <p>要求穿着特定靴子。</p>
</div>

<div class="card">
  <h3><a href="./item_level_above">物品等级高于（Item Level Above）</a></h3>
  <p>要求物品等级高于某值。</p>
</div>

<div class="card">
  <h3><a href="./item_level_below">物品等级低于（Item Level Below）</a></h3>
  <p>要求物品等级低于某值。</p>
</div>

<div class="card">
  <h3><a href="./item_level_equals">物品等级等于（Item Level Equals）</a></h3>
  <p>要求物品等级等于某值。</p>
</div>

</div>

### 经济与点数条件

<div class="card-grid">

<div class="card">
  <h3><a href="./above_balance">余额高于（Above Balance）</a></h3>
  <p>要求金钱余额高于某值。</p>
</div>

<div class="card">
  <h3><a href="./below_balance">余额低于（Below Balance）</a></h3>
  <p>要求金钱余额低于某值。</p>
</div>

<div class="card">
  <h3><a href="./can_afford_price">买得起（Can Afford Price）</a></h3>
  <p>要求玩家能负担某个价格。</p>
</div>

<div class="card">
  <h3><a href="./above_points">点数高于（Above Points）</a></h3>
  <p>要求点数高于某值。</p>
</div>

<div class="card">
  <h3><a href="./below_points">点数低于（Below Points）</a></h3>
  <p>要求点数低于某值。</p>
</div>

<div class="card">
  <h3><a href="./points_equal">点数等于（Points Equal）</a></h3>
  <p>要求点数等于某值。</p>
</div>

<div class="card">
  <h3><a href="./above_global_points">全局点数高于（Above Global Points）</a></h3>
  <p>要求全局点数高于某值。</p>
</div>

<div class="card">
  <h3><a href="./below_global_points">全局点数低于（Below Global Points）</a></h3>
  <p>要求全局点数低于某值。</p>
</div>

<div class="card">
  <h3><a href="./global_points_equal">全局点数等于（Global Points Equal）</a></h3>
  <p>要求全局点数等于某值。</p>
</div>

<div class="card">
  <h3><a href="./item_points_above">物品点数高于（Item Points Above）</a></h3>
  <p>要求物品点数高于某值。</p>
</div>

<div class="card">
  <h3><a href="./item_points_below">物品点数低于（Item Points Below）</a></h3>
  <p>要求物品点数低于某值。</p>
</div>

<div class="card">
  <h3><a href="./item_points_equal">物品点数等于（Item Points Equal）</a></h3>
  <p>要求物品点数等于某值。</p>
</div>

<div class="card">
  <h3><a href="./above_xp_level">经验等级高于（Above XP Level）</a></h3>
  <p>要求经验等级高于某值。</p>
</div>

<div class="card">
  <h3><a href="./below_xp_level">经验等级低于（Below XP Level）</a></h3>
  <p>要求经验等级低于某值。</p>
</div>

</div>

### 权限与称号条件

<div class="card-grid">

<div class="card">
  <h3><a href="./has_permission">拥有权限（Has Permission）</a></h3>
  <p>要求拥有特定权限。</p>
</div>

<div class="card">
  <h3><a href="./has_completed_advancement">完成进度（Has Completed Advancement）</a></h3>
  <p>要求已完成特定进度。</p>
</div>

</div>

### 占位符与数学条件

<div class="card-grid">

<div class="card">
  <h3><a href="./placeholder_greater_than">占位符大于（Placeholder Greater Than）</a></h3>
  <p>要求占位符大于或等于某值。</p>
</div>

<div class="card">
  <h3><a href="./placeholder_less_than">占位符小于（Placeholder Less Than）</a></h3>
  <p>要求占位符小于或等于某值。</p>
</div>

<div class="card">
  <h3><a href="./placeholder_equals">占位符等于（Placeholder Equals）</a></h3>
  <p>要求占位符等于某值。</p>
</div>

<div class="card">
  <h3><a href="./placeholder_contains">占位符包含（Placeholder Contains）</a></h3>
  <p>要求占位符包含某字符串。</p>
</div>

<div class="card">
  <h3><a href="./is_expression_true">表达式为真（Is Expression True）</a></h3>
  <p>要求数学表达式为真。</p>
</div>

</div>

### 高级逻辑条件

<div class="card-grid">

<div class="card">
  <h3><a href="./any_of">任一满足（Any Of）</a></h3>
  <p>要求条件列表中的至少一个满足。</p>
</div>

<div class="card">
  <h3><a href="./at_least_of">至少 N 个（At Least Of）</a></h3>
  <p>要求至少指定数量的条件满足。</p>
</div>

</div>

---

## 🔍 快速参考表

| 条件 ID | 分类 | 简述 |
|---------|------|------|
| `is_sneaking` | 玩家状态 | 玩家潜行 |
| `is_sprinting` | 玩家状态 | 玩家疾跑 |
| `is_flying` | 玩家状态 | 玩家飞行 |
| `is_gliding` | 玩家状态 | 玩家滑翔 |
| `is_swimming` | 玩家状态 | 玩家游泳 |
| `on_ground` | 玩家状态 | 玩家在地面 |
| `in_air` | 玩家状态 | 玩家在空中 |
| `is_alive` | 玩家状态 | 玩家存活 |
| `is_op` | 玩家状态 | 玩家是 OP |
| `on_fire` | 玩家状态 | 玩家着火 |
| `is_frozen` | 玩家状态 | 玩家冰冻 |
| `is_falling` | 玩家状态 | 玩家下落 |
| `is_submerged` | 玩家状态 | 玩家浸没 |
| `above_health_percent` | 玩家状态 | 生命高于 % |
| `below_health_percent` | 玩家状态 | 生命低于 % |
| `above_hunger_percent` | 玩家状态 | 饥饿高于 % |
| `below_hunger_percent` | 玩家状态 | 饥饿低于 % |
| `in_gamemode` | 玩家状态 | 处于游戏模式 |
| `in_world` | 世界 | 在世界中 |
| `in_biome` | 世界 | 在生物群系中 |
| `in_water` | 世界 | 在水中 |
| `in_lava` | 世界 | 在岩浆中 |
| `in_rain` | 世界 | 在下雨 |
| `is_night` | 世界 | 夜晚 |
| `is_storm` | 世界 | 暴风雨 |
| `light_level_below` | 世界 | 光照低于 |
| `standing_on_block` | 世界 | 站在方块上 |
| `in_block` | 世界 | 在方块内 |
| `above_y` | 位置 | 高于 Y 轴 |
| `below_y` | 位置 | 低于 Y 轴 |
| `near_entity` | 位置 | 靠近实体 |
| `within_radius_of` | 位置 | 半径范围内 |
| `riding_entity` | 位置 | 骑乘实体 |
| `in_mainhand` | 物品 | 主手物品 |
| `in_offhand` | 物品 | 副手物品 |
| `in_slot` | 物品 | 槽位物品 |
| `has_item` | 物品 | 拥有物品 |
| `has_enchant` | 物品 | 拥有附魔 |
| `has_potion_effect` | 物品 | 拥有药水效果 |
| `wearing_helmet` | 物品 | 戴头盔 |
| `wearing_chestplate` | 物品 | 穿胸甲 |
| `wearing_leggings` | 物品 | 穿护腿 |
| `wearing_boots` | 物品 | 穿靴子 |
| `item_level_above` | 物品 | 物品等级高于 |
| `item_level_below` | 物品 | 物品等级低于 |
| `item_level_equals` | 物品 | 物品等级等于 |
| `above_balance` | 经济 | 余额高于 |
| `below_balance` | 经济 | 余额低于 |
| `can_afford_price` | 经济 | 买得起价格 |
| `above_points` | 经济 | 点数高于 |
| `below_points` | 经济 | 点数低于 |
| `points_equal` | 经济 | 点数等于 |
| `above_global_points` | 经济 | 全局点数高于 |
| `below_global_points` | 经济 | 全局点数低于 |
| `global_points_equal` | 经济 | 全局点数等于 |
| `item_points_above` | 经济 | 物品点数高于 |
| `item_points_below` | 经济 | 物品点数低于 |
| `item_points_equal` | 经济 | 物品点数等于 |
| `above_xp_level` | 经济 | 经验等级高于 |
| `below_xp_level` | 经济 | 经验等级低于 |
| `has_permission` | 权限 | 拥有权限 |
| `has_completed_advancement` | 权限 | 完成进度 |
| `placeholder_greater_than` | 占位符 | 占位符 >= 值 |
| `placeholder_less_than` | 占位符 | 占位符 <= 值 |
| `placeholder_equals` | 占位符 | 占位符 = 值 |
| `placeholder_contains` | 占位符 | 占位符包含字符串 |
| `is_expression_true` | 占位符 | 表达式为真 |
| `any_of` | 逻辑 | 任一条件满足 |
| `at_least_of` | 逻辑 | 至少 N 个条件满足 |

📝 **编者注：** 完整的 114 个条件列表可在侧边栏查看。标记有外部插件名称的条件（如 WorldGuard、McMMO、Lands）需要安装对应插件。

## 关联页面

- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
- [所有变异器](../mutators/)
