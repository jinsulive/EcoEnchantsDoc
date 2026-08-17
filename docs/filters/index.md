---
title: All Filters
titleZh: 所有过滤器
category: filters
outline: deep
---

# 🔍 All Filters

> This section contains a complete reference of all available **Filters** in the libreforge & EcoEnchants system. Filters are evaluated before effects run to exclude non-matching targets. They are configured in YAML map format under the `filters` key, and can be inverted with a `not_` prefix.

::: tip How to use this page
Click any card below to view the full parameter reference and configuration examples for that filter. Use your browser's search (<kbd>Ctrl</kbd>+<kbd>F</kbd>) to quickly find specific filters.
:::

## 📊 Overview

| Category | Count | Description |
|----------|-------|-------------|
| Core Filters | 43 | Built-in filters shared by all eco plugins |
| AxEnvoy | 1 | Filters requiring the AxEnvoy plugin |
| Citizens | 1 | Filters requiring the Citizens plugin |
| CustomCrops | 4 | Filters requiring the CustomCrops plugin |
| CustomFishing | 1 | Filters requiring the CustomFishing plugin |
| HuskTowns | 1 | Filters requiring the HuskTowns plugin |
| Lands | 1 | Filters requiring the Lands plugin |
| PyroFishingPro | 2 | Filters requiring the PyroFishingPro plugin |
| Votifier | 1 | Filters requiring the Votifier plugin |
| WorldGuard | 1 | Filters requiring the WorldGuard plugin |
| mcMMO | 2 | Filters requiring the mcMMO plugin |

::: info Module Legend
<Badge type="info" text="libreforge" /> — Available in the core libreforge filter library (shared by all eco plugins)
<Badge type="danger" text="External" /> — Requires an external integration plugin (AxEnvoy, CustomCrops, mcMMO, WorldGuard, etc.)
:::

---

## 🗂️ Browse by Category

### Core Filters

#### Numeric Comparison

> Filters that compare numbers: health percent, durability, alt/value placeholders.

<div class="card-grid">

<div class="card">
  <h3><a href="./above_health_percent">above_health_percent</a></h3>
  <p>Matches when the victim's current health percentage is at or above the given value.</p>
</div>

<div class="card">
  <h3><a href="./alt_value_above">alt_value_above</a></h3>
  <p>Matches when the trigger's alt value is greater than or equal to the given amount.</p>
</div>

<div class="card">
  <h3><a href="./alt_value_below">alt_value_below</a></h3>
  <p>Matches when the trigger's alt value is less than the given amount.</p>
</div>

<div class="card">
  <h3><a href="./alt_value_equals">alt_value_equals</a></h3>
  <p>Matches when the trigger's alt value equals the given amount.</p>
</div>

<div class="card">
  <h3><a href="./item_durability_above">item_durability_above</a></h3>
  <p>Matches when the held item's remaining durability is at or above the given amount.</p>
</div>

<div class="card">
  <h3><a href="./item_durability_above_percent">item_durability_above_percent</a></h3>
  <p>Matches when the held item's remaining durability percentage is at or above the given value.</p>
</div>

<div class="card">
  <h3><a href="./item_durability_below">item_durability_below</a></h3>
  <p>Matches when the held item's remaining durability is at or below the given amount.</p>
</div>

<div class="card">
  <h3><a href="./item_durability_below_percent">item_durability_below_percent</a></h3>
  <p>Matches when the held item's remaining durability percentage is at or below the given value.</p>
</div>

<div class="card">
  <h3><a href="./on_max_health">on_max_health</a></h3>
  <p>Matches when the victim is (or is not) at maximum health.</p>
</div>

<div class="card">
  <h3><a href="./value_above">value_above</a></h3>
  <p>Matches when the trigger value is greater than or equal to the given amount.</p>
</div>

<div class="card">
  <h3><a href="./value_below">value_below</a></h3>
  <p>Matches when the trigger value is less than the given amount.</p>
</div>

<div class="card">
  <h3><a href="./value_equals">value_equals</a></h3>
  <p>Matches when the trigger value equals the given amount.</p>
</div>

</div>

#### State & Logic

> Filters that check entity/player state: boss, NPC, spawner, growth, expressions.

<div class="card-grid">

<div class="card">
  <h3><a href="./from_spawner">from_spawner</a></h3>
  <p>Matches when the victim was (or was not) spawned by a mob spawner.</p>
</div>

<div class="card">
  <h3><a href="./fully_charged">fully_charged</a></h3>
  <p>Matches when the attack or bow shot is (or is not) fully charged.</p>
</div>

<div class="card">
  <h3><a href="./fully_grown">fully_grown</a></h3>
  <p>Matches when the block is (or is not) fully grown.</p>
</div>

<div class="card">
  <h3><a href="./honey_level_full">honey_level_full</a></h3>
  <p>Matches when the beehive or bee nest block has a full honey level.</p>
</div>

<div class="card">
  <h3><a href="./is_behind_victim">is_behind_victim</a></h3>
  <p>Matches when the player is (or is not) behind the victim.</p>
</div>

<div class="card">
  <h3><a href="./is_boss">is_boss</a></h3>
  <p>Matches when the victim is (or is not) a boss entity.</p>
</div>

<div class="card">
  <h3><a href="./is_expression_true">is_expression_true</a></h3>
  <p>Matches when the given mathematical expression evaluates to a value greater than zero.</p>
</div>

<div class="card">
  <h3><a href="./is_npc">is_npc</a></h3>
  <p>Matches when the victim is (or is not) an NPC.</p>
</div>

<div class="card">
  <h3><a href="./is_passive">is_passive</a></h3>
  <p>Matches when the victim is (or is not) a passive creature.</p>
</div>

<div class="card">
  <h3><a href="./is_tamed_entity_owner">is_tamed_entity_owner</a></h3>
  <p>Matches when the player is (or is not) the owner of the tamed victim entity.</p>
</div>

<div class="card">
  <h3><a href="./only_bosses">only_bosses</a></h3>
  <p>Matches when the victim is a boss entity.</p>
</div>

<div class="card">
  <h3><a href="./only_non_bosses">only_non_bosses</a></h3>
  <p>Matches when the victim is not a boss entity.</p>
</div>

<div class="card">
  <h3><a href="./player_placed">player_placed</a></h3>
  <p>Matches when the block was (or was not) placed by a player.</p>
</div>

<div class="card">
  <h3><a href="./swept">swept</a></h3>
  <p>Matches when the attack is (or is not) a sweep attack.</p>
</div>

<div class="card">
  <h3><a href="./victim_conditions">victim_conditions</a></h3>
  <p>Matches when the victim entity meets all of the given conditions.</p>
</div>

</div>

#### Items & Entities

> Filters that match blocks, items, entities, projectiles and effects.

<div class="card-grid">

<div class="card">
  <h3><a href="./blocks">blocks</a></h3>
  <p>Matches when the block type is in the given list.</p>
</div>

<div class="card">
  <h3><a href="./damage_cause">damage_cause</a></h3>
  <p>Matches when the damage cause matches one of the given causes.</p>
</div>

<div class="card">
  <h3><a href="./enchant">enchant</a></h3>
  <p>Matches when one of the enchantments being applied matches one of the given enchantment IDs.</p>
</div>

<div class="card">
  <h3><a href="./entities">entities</a></h3>
  <p>Matches when the victim entity type is in the given list.</p>
</div>

<div class="card">
  <h3><a href="./items">items</a></h3>
  <p>Matches when the held item matches one of the given item types.</p>
</div>

<div class="card">
  <h3><a href="./potion_effect">potion_effect</a></h3>
  <p>Matches when the potion effect being applied matches one of the given effect types.</p>
</div>

<div class="card">
  <h3><a href="./projectiles">projectiles</a></h3>
  <p>Matches when the projectile type matches one of the given entity types.</p>
</div>

<div class="card">
  <h3><a href="./sheep_color">sheep_color</a></h3>
  <p>Matches when the victim sheep's wool color matches one of the given colors.</p>
</div>

<div class="card">
  <h3><a href="./spawner_entity">spawner_entity</a></h3>
  <p>Matches when the block is a spawner and its spawn type matches one of the given entity types.</p>
</div>

<div class="card">
  <h3><a href="./tamed_entity">tamed_entity</a></h3>
  <p>Matches when the victim is a tamed entity of one of the given types.</p>
</div>

<div class="card">
  <h3><a href="./this_item">this_item</a></h3>
  <p>Matches when the item that triggered the effect is the same item that holds this effect.</p>
</div>

</div>

#### Text & Player

> Filters that match player names, advancement keys and text content.

<div class="card-grid">

<div class="card">
  <h3><a href="./advancements">advancements</a></h3>
  <p>Matches when the advancement completed matches one of the given advancement keys.</p>
</div>

<div class="card">
  <h3><a href="./player_name">player_name</a></h3>
  <p>Matches when the player's name is in the given list.</p>
</div>

<div class="card">
  <h3><a href="./text">text</a></h3>
  <p>Matches when the trigger text exactly matches one of the given values.</p>
</div>

<div class="card">
  <h3><a href="./text_contains">text_contains</a></h3>
  <p>Matches when the trigger text contains one of the given substrings.</p>
</div>

<div class="card">
  <h3><a href="./victim_name">victim_name</a></h3>
  <p>Matches when the victim's name is in the given list.</p>
</div>

</div>

### Integration Filters

#### AxEnvoy

<div class="card-grid">

<div class="card">
  <h3><a href="./envoy_type">envoy_type</a></h3>
  <p>Matches when the collected envoy crate type matches one of the given names.</p>
</div>

</div>

#### Citizens

<div class="card-grid">

<div class="card">
  <h3><a href="./npc">npc</a></h3>
  <p>Matches when the Citizens NPC involved in the event has one of the given IDs.</p>
</div>

</div>

#### CustomCrops

<div class="card-grid">

<div class="card">
  <h3><a href="./custom_crop_stage">custom_crop_stage</a></h3>
  <p>Matches when the broken crop's stage item ID matches one of the given IDs.</p>
</div>

<div class="card">
  <h3><a href="./custom_crop_type">custom_crop_type</a></h3>
  <p>Matches when the crop type ID matches one of the given IDs.</p>
</div>

<div class="card">
  <h3><a href="./fertilizer_type">fertilizer_type</a></h3>
  <p>Matches when the fertilizer used matches one of the given fertilizer IDs.</p>
</div>

<div class="card">
  <h3><a href="./watering_can_type">watering_can_type</a></h3>
  <p>Matches when the watering can used matches one of the given watering can IDs.</p>
</div>

</div>

#### CustomFishing

<div class="card-grid">

<div class="card">
  <h3><a href="./custom_fish_type">custom_fish_type</a></h3>
  <p>Matches when the caught fish type matches one of the given IDs.</p>
</div>

</div>

#### HuskTowns

<div class="card-grid">

<div class="card">
  <h3><a href="./town_role">town_role</a></h3>
  <p>Matches when the player's new HuskTowns town role matches one of the given role names.</p>
</div>

</div>

#### Lands

<div class="card-grid">

<div class="card">
  <h3><a href="./at_war_with_victim">at_war_with_victim</a></h3>
  <p>Matches when the player and victim are (or are not) at war with each other in Lands.</p>
</div>

</div>

#### PyroFishingPro

<div class="card-grid">

<div class="card">
  <h3><a href="./pyro_fish_hotspot">pyro_fish_hotspot</a></h3>
  <p>Matches when the fishing catch is (or is not) from a hotspot.</p>
</div>

<div class="card">
  <h3><a href="./pyro_fish_tier">pyro_fish_tier</a></h3>
  <p>Matches when the caught fish tier matches one of the given tier names.</p>
</div>

</div>

#### Votifier

<div class="card-grid">

<div class="card">
  <h3><a href="./vote_service">vote_service</a></h3>
  <p>Matches when the vote service name matches one of the given service names.</p>
</div>

</div>

#### WorldGuard

<div class="card-grid">

<div class="card">
  <h3><a href="./region">region</a></h3>
  <p>Matches when the event occurs in one of the given WorldGuard region IDs.</p>
</div>

</div>

#### mcMMO

<div class="card-grid">

<div class="card">
  <h3><a href="./mcmmo_ability">mcmmo_ability</a></h3>
  <p>Matches when the McMMO ability involved in the event matches one of the given ability names.</p>
</div>

<div class="card">
  <h3><a href="./skill">skill</a></h3>
  <p>Matches when the McMMO skill involved in the event matches one of the given skill names.</p>
</div>

</div>

---

## Related Pages

- [All Effects](../effects/)
- [All Conditions](../conditions/)
- [All Mutators](../mutators/)
- [Enum Quick Reference](../reference/enums)
