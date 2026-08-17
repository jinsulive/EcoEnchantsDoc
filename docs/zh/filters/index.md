---
title: 所有过滤器
titleEn: All Filters
category: filters
outline: deep
---

# 🔍 所有过滤器

> 本节包含 libreforge 与 EcoEnchants 系统中所有可用 **过滤器（Filters）** 的完整参考。过滤器在效果执行前筛除不符合条件的对象。以 YAML Map 格式配置在 `filters` 键下，可用 `not_` 前缀取反。

::: tip 如何使用本页
点击下方任意卡片查看该过滤器的完整参数说明与配置示例。可使用浏览器搜索（<kbd>Ctrl</kbd>+<kbd>F</kbd>）快速定位。
:::

## 📊 概览

| 分类 | 数量 | 说明 |
|------|------|------|
| 内置过滤器 | 43 | 所有 eco 插件共享的内置过滤器 |
| AxEnvoy | 1 | 需要 AxEnvoy 插件的过滤器 |
| Citizens | 1 | 需要 Citizens 插件的过滤器 |
| CustomCrops | 4 | 需要 CustomCrops 插件的过滤器 |
| CustomFishing | 1 | 需要 CustomFishing 插件的过滤器 |
| HuskTowns | 1 | 需要 HuskTowns 插件的过滤器 |
| Lands | 1 | 需要 Lands 插件的过滤器 |
| PyroFishingPro | 2 | 需要 PyroFishingPro 插件的过滤器 |
| Votifier | 1 | 需要 Votifier 插件的过滤器 |
| WorldGuard | 1 | 需要 WorldGuard 插件的过滤器 |
| mcMMO | 2 | 需要 mcMMO 插件的过滤器 |

::: info 模块图例
<Badge type="info" text="libreforge" /> — 核心 libreforge 过滤器库内置（所有 eco 插件共享）
<Badge type="danger" text="外部" /> — 需要外部集成插件（AxEnvoy、CustomCrops、mcMMO、WorldGuard 等）
:::

---

## 🗂️ 按分类浏览

### 内置过滤器

#### 数值比较

> 数值比较类过滤器：生命百分比、耐久、替代值/数值占位符比较。

<div class="card-grid">

<div class="card">
  <h3><a href="./above_health_percent">生命百分比高于（above_health_percent）</a></h3>
  <p>当受害者的当前生命值百分比大于或等于给定值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./alt_value_above">替代值高于（alt_value_above）</a></h3>
  <p>当触发器的备选值（ALT_VALUE）大于或等于给定数值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./alt_value_below">替代值低于（alt_value_below）</a></h3>
  <p>当触发器的备选值（ALT_VALUE）小于给定数值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./alt_value_equals">替代值等于（alt_value_equals）</a></h3>
  <p>当触发器的备选值（ALT_VALUE）等于给定数值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./item_durability_above">物品耐久高于（item_durability_above）</a></h3>
  <p>当手持物品的剩余耐久大于或等于给定数值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./item_durability_above_percent">物品耐久百分比高于（item_durability_above_percent）</a></h3>
  <p>当手持物品的剩余耐久百分比大于或等于给定值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./item_durability_below">物品耐久低于（item_durability_below）</a></h3>
  <p>当手持物品的剩余耐久小于或等于给定数值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./item_durability_below_percent">物品耐久百分比低于（item_durability_below_percent）</a></h3>
  <p>当手持物品的剩余耐久百分比小于或等于给定值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./on_max_health">满生命值（on_max_health）</a></h3>
  <p>当受害者（是否）处于最大生命值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./value_above">数值高于（value_above）</a></h3>
  <p>当触发器数值（VALUE）大于或等于给定数值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./value_below">数值低于（value_below）</a></h3>
  <p>当触发器数值（VALUE）小于给定数值时匹配。</p>
</div>

<div class="card">
  <h3><a href="./value_equals">数值等于（value_equals）</a></h3>
  <p>当触发器数值（VALUE）等于给定数值时匹配。</p>
</div>

</div>

#### 状态/逻辑判断

> 状态与逻辑判断类过滤器：Boss、NPC、刷怪笼、生长状态、表达式等。

<div class="card-grid">

<div class="card">
  <h3><a href="./from_spawner">来自刷怪笼（from_spawner）</a></h3>
  <p>当受害者（是否）由刷怪笼生成时匹配。</p>
</div>

<div class="card">
  <h3><a href="./fully_charged">完全蓄力（fully_charged）</a></h3>
  <p>当攻击或弓箭射击（是否）完全蓄力时匹配。</p>
</div>

<div class="card">
  <h3><a href="./fully_grown">完全生长（fully_grown）</a></h3>
  <p>当方块（是否）完全成熟时匹配。</p>
</div>

<div class="card">
  <h3><a href="./honey_level_full">蜂蜜满级（honey_level_full）</a></h3>
  <p>当蜂箱或蜂巢方块拥有满蜂蜜等级时匹配。</p>
</div>

<div class="card">
  <h3><a href="./is_behind_victim">位于受害者身后（is_behind_victim）</a></h3>
  <p>当玩家（是否）位于受害者身后时匹配。</p>
</div>

<div class="card">
  <h3><a href="./is_boss">是 Boss（is_boss）</a></h3>
  <p>当受害者（是否）为 BOSS 实体时匹配。</p>
</div>

<div class="card">
  <h3><a href="./is_expression_true">表达式为真（is_expression_true）</a></h3>
  <p>当给定的数学表达式计算结果大于零时匹配。</p>
</div>

<div class="card">
  <h3><a href="./is_npc">是 NPC（is_npc）</a></h3>
  <p>当受害者（是否）为 NPC 时匹配。</p>
</div>

<div class="card">
  <h3><a href="./is_passive">被动生物（is_passive）</a></h3>
  <p>当受害者（是否）为被动生物时匹配。</p>
</div>

<div class="card">
  <h3><a href="./is_tamed_entity_owner">驯服实体主人（is_tamed_entity_owner）</a></h3>
  <p>当玩家（是否）为被驯服受害者实体的主人时匹配。</p>
</div>

<div class="card">
  <h3><a href="./only_bosses">仅 Boss（only_bosses）</a></h3>
  <p>当受害者是 BOSS 实体时匹配。</p>
</div>

<div class="card">
  <h3><a href="./only_non_bosses">仅非 Boss（only_non_bosses）</a></h3>
  <p>当受害者不是 BOSS 实体时匹配。</p>
</div>

<div class="card">
  <h3><a href="./player_placed">玩家放置（player_placed）</a></h3>
  <p>当方块（是否）由玩家放置时匹配。</p>
</div>

<div class="card">
  <h3><a href="./swept">横扫攻击（swept）</a></h3>
  <p>当攻击（是否）为横扫攻击时匹配。</p>
</div>

<div class="card">
  <h3><a href="./victim_conditions">受害者条件（victim_conditions）</a></h3>
  <p>当受害者实体满足所有给定条件时匹配。</p>
</div>

</div>

#### 物品与实体

> 匹配方块、物品、实体、弹射物与效果的过滤器。

<div class="card-grid">

<div class="card">
  <h3><a href="./blocks">方块（blocks）</a></h3>
  <p>当方块类型在给定列表中时匹配。</p>
</div>

<div class="card">
  <h3><a href="./damage_cause">伤害原因（damage_cause）</a></h3>
  <p>当伤害原因与给定的原因之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./enchant">附魔（enchant）</a></h3>
  <p>当正在应用的附魔之一与给定的附魔 ID 匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./entities">实体（entities）</a></h3>
  <p>当受害者实体类型在给定列表中时匹配。</p>
</div>

<div class="card">
  <h3><a href="./items">物品（items）</a></h3>
  <p>当手持物品与给定的物品类型之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./potion_effect">药水效果（potion_effect）</a></h3>
  <p>当正在应用的药水效果与给定的效果类型之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./projectiles">弹射物（projectiles）</a></h3>
  <p>当弹射物类型与给定的实体类型之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./sheep_color">绵羊颜色（sheep_color）</a></h3>
  <p>当受害绵羊的羊毛颜色与给定的颜色之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./spawner_entity">刷怪笼实体（spawner_entity）</a></h3>
  <p>当方块是刷怪笼且其生成类型与给定的实体类型之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./tamed_entity">驯服实体（tamed_entity）</a></h3>
  <p>当受害者是给定类型之一的驯服实体时匹配。</p>
</div>

<div class="card">
  <h3><a href="./this_item">当前物品（this_item）</a></h3>
  <p>当触发效果的物品与持有此效果的物品相同时匹配。</p>
</div>

</div>

#### 文本与玩家

> 匹配玩家名、进度 key 与文本内容的过滤器。

<div class="card-grid">

<div class="card">
  <h3><a href="./advancements">进度（advancements）</a></h3>
  <p>当完成的进度与给定的进度 key 之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./player_name">玩家名（player_name）</a></h3>
  <p>当玩家名称在给定列表中时匹配。</p>
</div>

<div class="card">
  <h3><a href="./text">文本（text）</a></h3>
  <p>当触发文本与给定的值之一完全匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./text_contains">文本包含（text_contains）</a></h3>
  <p>当触发文本包含给定的子串之一时匹配。</p>
</div>

<div class="card">
  <h3><a href="./victim_name">受害者名称（victim_name）</a></h3>
  <p>当受害者的名称在给定列表中时匹配。</p>
</div>

</div>

### 集成过滤器

#### AxEnvoy

<div class="card-grid">

<div class="card">
  <h3><a href="./envoy_type">补给类型（envoy_type）</a></h3>
  <p>当收集的空投箱类型与给定的名称之一匹配时匹配。</p>
</div>

</div>

#### Citizens

<div class="card-grid">

<div class="card">
  <h3><a href="./npc">NPC（npc）</a></h3>
  <p>当事件涉及的 Citizens NPC 具有给定的 ID 之一时匹配。</p>
</div>

</div>

#### CustomCrops

<div class="card-grid">

<div class="card">
  <h3><a href="./custom_crop_stage">自定义作物阶段（custom_crop_stage）</a></h3>
  <p>当被破坏作物的阶段物品 ID 与给定 ID 之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./custom_crop_type">自定义作物类型（custom_crop_type）</a></h3>
  <p>当作物类型 ID 与给定 ID 之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./fertilizer_type">肥料类型（fertilizer_type）</a></h3>
  <p>当使用的肥料与给定的肥料 ID 之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./watering_can_type">喷壶类型（watering_can_type）</a></h3>
  <p>当使用的洒水壶与给定的洒水壶 ID 之一匹配时匹配。</p>
</div>

</div>

#### CustomFishing

<div class="card-grid">

<div class="card">
  <h3><a href="./custom_fish_type">自定义鱼类类型（custom_fish_type）</a></h3>
  <p>当钓到的鱼类类型与给定 ID 之一匹配时匹配。</p>
</div>

</div>

#### HuskTowns

<div class="card-grid">

<div class="card">
  <h3><a href="./town_role">城镇职位（town_role）</a></h3>
  <p>当玩家的新 HuskTowns 城镇职位与给定的职位名称之一匹配时匹配。</p>
</div>

</div>

#### Lands

<div class="card-grid">

<div class="card">
  <h3><a href="./at_war_with_victim">与受害者交战（at_war_with_victim）</a></h3>
  <p>当玩家与受害者在 Lands 中处于（或未处于）交战状态时匹配。</p>
</div>

</div>

#### PyroFishingPro

<div class="card-grid">

<div class="card">
  <h3><a href="./pyro_fish_hotspot">钓鱼热点（pyro_fish_hotspot）</a></h3>
  <p>当钓鱼收获（是否）来自热点区域时匹配。</p>
</div>

<div class="card">
  <h3><a href="./pyro_fish_tier">鱼类等级（pyro_fish_tier）</a></h3>
  <p>当钓到的鱼等级与给定的等级名称之一匹配时匹配。</p>
</div>

</div>

#### Votifier

<div class="card-grid">

<div class="card">
  <h3><a href="./vote_service">投票服务（vote_service）</a></h3>
  <p>当投票服务名称与给定的服务名称之一匹配时匹配。</p>
</div>

</div>

#### WorldGuard

<div class="card-grid">

<div class="card">
  <h3><a href="./region">区域（region）</a></h3>
  <p>当事件发生在给定的 WorldGuard 区域 ID 之一中时匹配。</p>
</div>

</div>

#### mcMMO

<div class="card-grid">

<div class="card">
  <h3><a href="./mcmmo_ability">McMMO 技能（mcmmo_ability）</a></h3>
  <p>当事件涉及的 McMMO 技能能力与给定的能力名称之一匹配时匹配。</p>
</div>

<div class="card">
  <h3><a href="./skill">技能（skill）</a></h3>
  <p>当事件涉及的 McMMO 技能与给定的技能名称之一匹配时匹配。</p>
</div>

</div>

---

## 关联页面

- [所有效果](../effects/)
- [所有条件](../conditions/)
- [所有变异器](../mutators/)
- [枚举值速查表](../reference/enums)
