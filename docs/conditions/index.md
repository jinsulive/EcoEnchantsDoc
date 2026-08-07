---
title: All Conditions
titleZh: 所有条件
category: conditions
outline: deep
---

# 🔒 All Conditions

> Conditions are requirements that must be met for an effect to activate. They allow you to control when effects run by checking things like the player's permission, Y level, world, health, and more. This section contains a complete reference of all available **Conditions** in the libreforge & EcoEnchants system.

::: tip How to use this page
Click any card below to view the full parameter reference. Use your browser's search (<kbd>Ctrl</kbd>+<kbd>F</kbd>) to quickly find specific conditions.
:::

## Condition Basics

Like effects and mutators, conditions consist of an **ID** and **arguments**:

```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp"
```

### The Inverse Argument

All conditions have an optional `inverse` argument that negates the condition — it is only true when the base condition is false:

```yaml
- id: on_fire
  args:
    inverse: true # (Optional) Negates the condition
```

### Not-Met Lines

For item plugins (EcoEnchants, EcoItems, Reforges, Talismans, EcoArmor), you can add lore lines shown when the condition is not met:

```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp"
    not-met-lines: # (Optional) Lore lines when the condition is not met (item plugins only)
      - "&cYou need &bMVP&c rank to use &7Crystal Finder"
```

### Not-Met Effects

For effect-specific conditions, you can specify effects that run when the condition is not met but a player tries to activate the effect:

```yaml
effects:
  - id: give_money
    args:
      amount: 100
    conditions:
      - id: has_permission
        args:
          permission: "ecomc.rank.mvp"
        not-met-effects: # (Optional) Effects to run when the condition is not met
          - id: send_message
            args:
              message: "&cYou need &bMVP&c rank!"
    triggers:
      - break_block
```

### Victim Conditions

Check if the victim meets conditions before running effects using the `victim_conditions` filter:

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

## 📊 Overview

| Category | Count | Description |
|----------|-------|-------------|
| Player State | 20 | Player status: health, hunger, flying, sneaking, etc. |
| World & Environment | 15 | World, biome, weather, time, light level |
| Items & Equipment | 15 | Held items, worn armor, enchantments |
| Economy & Points | 15 | Balance, points, prices, currencies |
| Permissions & Ranks | 5 | Permission and rank checks |
| Position & Movement | 10 | Y level, location, region, claim |
| Placeholder & Math | 5 | Placeholder comparisons and expressions |
| Advanced Logic | 5 | any_of, at_least_of, and more |

---

## 🗂️ Browse by Category

### Player State Conditions

<div class="card-grid">

<div class="card">
  <h3><a href="./is_sneaking">Is Sneaking</a></h3>
  <p>Requires the player to be sneaking.</p>
</div>

<div class="card">
  <h3><a href="./is_sprinting">Is Sprinting</a></h3>
  <p>Requires the player to be sprinting.</p>
</div>

<div class="card">
  <h3><a href="./is_flying">Is Flying</a></h3>
  <p>Requires the player to be flying.</p>
</div>

<div class="card">
  <h3><a href="./is_gliding">Is Gliding</a></h3>
  <p>Requires the player to be gliding (elytra).</p>
</div>

<div class="card">
  <h3><a href="./is_swimming">Is Swimming</a></h3>
  <p>Requires the player to be swimming.</p>
</div>

<div class="card">
  <h3><a href="./on_ground">On Ground</a></h3>
  <p>Requires the player to be on the ground.</p>
</div>

<div class="card">
  <h3><a href="./in_air">In Air</a></h3>
  <p>Requires the player to be in the air.</p>
</div>

<div class="card">
  <h3><a href="./is_alive">Is Alive</a></h3>
  <p>Requires the player to be alive.</p>
</div>

<div class="card">
  <h3><a href="./is_op">Is OP</a></h3>
  <p>Requires the player to be an operator.</p>
</div>

<div class="card">
  <h3><a href="./on_fire">On Fire</a></h3>
  <p>Requires the player to be on fire.</p>
</div>

<div class="card">
  <h3><a href="./is_frozen">Is Frozen</a></h3>
  <p>Requires the player to be frozen.</p>
</div>

<div class="card">
  <h3><a href="./is_falling">Is Falling</a></h3>
  <p>Requires the player to be falling.</p>
</div>

<div class="card">
  <h3><a href="./is_submerged">Is Submerged</a></h3>
  <p>Requires the player to be submerged in water.</p>
</div>

<div class="card">
  <h3><a href="./above_health_percent">Above Health Percent</a></h3>
  <p>Requires health above a percentage.</p>
</div>

<div class="card">
  <h3><a href="./below_health_percent">Below Health Percent</a></h3>
  <p>Requires health below a percentage.</p>
</div>

<div class="card">
  <h3><a href="./above_hunger_percent">Above Hunger Percent</a></h3>
  <p>Requires hunger above a percentage.</p>
</div>

<div class="card">
  <h3><a href="./below_hunger_percent">Below Hunger Percent</a></h3>
  <p>Requires hunger below a percentage.</p>
</div>

<div class="card">
  <h3><a href="./in_gamemode">In Gamemode</a></h3>
  <p>Requires the player to be in a specific gamemode.</p>
</div>

</div>

### World & Environment Conditions

<div class="card-grid">

<div class="card">
  <h3><a href="./in_world">In World</a></h3>
  <p>Requires the player to be in a certain world.</p>
</div>

<div class="card">
  <h3><a href="./in_biome">In Biome</a></h3>
  <p>Requires the player to be in a certain biome.</p>
</div>

<div class="card">
  <h3><a href="./in_water">In Water</a></h3>
  <p>Requires the player to be in water.</p>
</div>

<div class="card">
  <h3><a href="./in_lava">In Lava</a></h3>
  <p>Requires the player to be in lava.</p>
</div>

<div class="card">
  <h3><a href="./in_rain">In Rain</a></h3>
  <p>Requires rain.</p>
</div>

<div class="card">
  <h3><a href="./is_night">Is Night</a></h3>
  <p>Requires night time.</p>
</div>

<div class="card">
  <h3><a href="./is_storm">Is Storm</a></h3>
  <p>Requires a storm.</p>
</div>

<div class="card">
  <h3><a href="./light_level_below">Light Level Below</a></h3>
  <p>Requires light level below a value.</p>
</div>

<div class="card">
  <h3><a href="./standing_on_block">Standing On Block</a></h3>
  <p>Requires standing on a specific block.</p>
</div>

<div class="card">
  <h3><a href="./in_block">In Block</a></h3>
  <p>Requires the player to be inside a specific block.</p>
</div>

</div>

### Position & Movement Conditions

<div class="card-grid">

<div class="card">
  <h3><a href="./above_y">Above Y</a></h3>
  <p>Requires the player to be above a certain Y level.</p>
</div>

<div class="card">
  <h3><a href="./below_y">Below Y</a></h3>
  <p>Requires the player to be below a certain Y level.</p>
</div>

<div class="card">
  <h3><a href="./near_entity">Near Entity</a></h3>
  <p>Requires an entity within a radius.</p>
</div>

<div class="card">
  <h3><a href="./within_radius_of">Within Radius Of</a></h3>
  <p>Requires a location within a radius.</p>
</div>

<div class="card">
  <h3><a href="./riding_entity">Riding Entity</a></h3>
  <p>Requires riding a specific entity.</p>
</div>

</div>

### Items & Equipment Conditions

<div class="card-grid">

<div class="card">
  <h3><a href="./in_mainhand">In Mainhand</a></h3>
  <p>Requires a specific item in the main hand.</p>
</div>

<div class="card">
  <h3><a href="./in_offhand">In Offhand</a></h3>
  <p>Requires a specific item in the offhand.</p>
</div>

<div class="card">
  <h3><a href="./in_slot">In Slot</a></h3>
  <p>Requires a specific item in a slot.</p>
</div>

<div class="card">
  <h3><a href="./has_item">Has Item</a></h3>
  <p>Requires the player to have an item.</p>
</div>

<div class="card">
  <h3><a href="./has_enchant">Has Enchant</a></h3>
  <p>Requires an item with a specific enchantment.</p>
</div>

<div class="card">
  <h3><a href="./has_potion_effect">Has Potion Effect</a></h3>
  <p>Requires the player to have a potion effect.</p>
</div>

<div class="card">
  <h3><a href="./wearing_helmet">Wearing Helmet</a></h3>
  <p>Requires wearing a specific helmet.</p>
</div>

<div class="card">
  <h3><a href="./wearing_chestplate">Wearing Chestplate</a></h3>
  <p>Requires wearing a specific chestplate.</p>
</div>

<div class="card">
  <h3><a href="./wearing_leggings">Wearing Leggings</a></h3>
  <p>Requires wearing specific leggings.</p>
</div>

<div class="card">
  <h3><a href="./wearing_boots">Wearing Boots</a></h3>
  <p>Requires wearing specific boots.</p>
</div>

<div class="card">
  <h3><a href="./item_level_above">Item Level Above</a></h3>
  <p>Requires item level above a value.</p>
</div>

<div class="card">
  <h3><a href="./item_level_below">Item Level Below</a></h3>
  <p>Requires item level below a value.</p>
</div>

<div class="card">
  <h3><a href="./item_level_equals">Item Level Equals</a></h3>
  <p>Requires item level equal to a value.</p>
</div>

</div>

### Economy & Points Conditions

<div class="card-grid">

<div class="card">
  <h3><a href="./above_balance">Above Balance</a></h3>
  <p>Requires money balance above a value.</p>
</div>

<div class="card">
  <h3><a href="./below_balance">Below Balance</a></h3>
  <p>Requires money balance below a value.</p>
</div>

<div class="card">
  <h3><a href="./can_afford_price">Can Afford Price</a></h3>
  <p>Requires the player to afford a price.</p>
</div>

<div class="card">
  <h3><a href="./above_points">Above Points</a></h3>
  <p>Requires points above a value.</p>
</div>

<div class="card">
  <h3><a href="./below_points">Below Points</a></h3>
  <p>Requires points below a value.</p>
</div>

<div class="card">
  <h3><a href="./points_equal">Points Equal</a></h3>
  <p>Requires points equal to a value.</p>
</div>

<div class="card">
  <h3><a href="./above_global_points">Above Global Points</a></h3>
  <p>Requires global points above a value.</p>
</div>

<div class="card">
  <h3><a href="./below_global_points">Below Global Points</a></h3>
  <p>Requires global points below a value.</p>
</div>

<div class="card">
  <h3><a href="./global_points_equal">Global Points Equal</a></h3>
  <p>Requires global points equal to a value.</p>
</div>

<div class="card">
  <h3><a href="./item_points_above">Item Points Above</a></h3>
  <p>Requires item points above a value.</p>
</div>

<div class="card">
  <h3><a href="./item_points_below">Item Points Below</a></h3>
  <p>Requires item points below a value.</p>
</div>

<div class="card">
  <h3><a href="./item_points_equal">Item Points Equal</a></h3>
  <p>Requires item points equal to a value.</p>
</div>

<div class="card">
  <h3><a href="./above_xp_level">Above XP Level</a></h3>
  <p>Requires XP level above a value.</p>
</div>

<div class="card">
  <h3><a href="./below_xp_level">Below XP Level</a></h3>
  <p>Requires XP level below a value.</p>
</div>

</div>

### Permissions & Ranks Conditions

<div class="card-grid">

<div class="card">
  <h3><a href="./has_permission">Has Permission</a></h3>
  <p>Requires a certain permission.</p>
</div>

<div class="card">
  <h3><a href="./has_completed_advancement">Has Completed Advancement</a></h3>
  <p>Requires a completed advancement.</p>
</div>

</div>

### Placeholder & Math Conditions

<div class="card-grid">

<div class="card">
  <h3><a href="./placeholder_greater_than">Placeholder Greater Than</a></h3>
  <p>Requires a placeholder to be greater than or equal to a value.</p>
</div>

<div class="card">
  <h3><a href="./placeholder_less_than">Placeholder Less Than</a></h3>
  <p>Requires a placeholder to be less than or equal to a value.</p>
</div>

<div class="card">
  <h3><a href="./placeholder_equals">Placeholder Equals</a></h3>
  <p>Requires a placeholder to equal a value.</p>
</div>

<div class="card">
  <h3><a href="./placeholder_contains">Placeholder Contains</a></h3>
  <p>Requires a placeholder to contain a string.</p>
</div>

<div class="card">
  <h3><a href="./is_expression_true">Is Expression True</a></h3>
  <p>Requires a math expression to be true.</p>
</div>

</div>

### Advanced Logic Conditions

<div class="card-grid">

<div class="card">
  <h3><a href="./any_of">Any Of</a></h3>
  <p>Requires at least one of a list of conditions to be met.</p>
</div>

<div class="card">
  <h3><a href="./at_least_of">At Least Of</a></h3>
  <p>Requires at least a certain number of conditions to be met.</p>
</div>

</div>

---

## 🔍 Quick Reference

| Condition ID | Category | Brief |
|--------------|----------|-------|
| `is_sneaking` | Player State | Player is sneaking |
| `is_sprinting` | Player State | Player is sprinting |
| `is_flying` | Player State | Player is flying |
| `is_gliding` | Player State | Player is gliding |
| `is_swimming` | Player State | Player is swimming |
| `on_ground` | Player State | Player is on the ground |
| `in_air` | Player State | Player is in the air |
| `is_alive` | Player State | Player is alive |
| `is_op` | Player State | Player is an operator |
| `on_fire` | Player State | Player is on fire |
| `is_frozen` | Player State | Player is frozen |
| `is_falling` | Player State | Player is falling |
| `is_submerged` | Player State | Player is submerged |
| `above_health_percent` | Player State | Health above % |
| `below_health_percent` | Player State | Health below % |
| `above_hunger_percent` | Player State | Hunger above % |
| `below_hunger_percent` | Player State | Hunger below % |
| `in_gamemode` | Player State | In a gamemode |
| `in_world` | World | In a world |
| `in_biome` | World | In a biome |
| `in_water` | World | In water |
| `in_lava` | World | In lava |
| `in_rain` | World | In rain |
| `is_night` | World | It is night |
| `is_storm` | World | It is stormy |
| `light_level_below` | World | Light level below |
| `standing_on_block` | World | Standing on a block |
| `in_block` | World | Inside a block |
| `above_y` | Position | Above a Y level |
| `below_y` | Position | Below a Y level |
| `near_entity` | Position | Near an entity |
| `within_radius_of` | Position | Within a radius |
| `riding_entity` | Position | Riding an entity |
| `in_mainhand` | Items | Item in main hand |
| `in_offhand` | Items | Item in offhand |
| `in_slot` | Items | Item in a slot |
| `has_item` | Items | Has an item |
| `has_enchant` | Items | Has an enchantment |
| `has_potion_effect` | Items | Has a potion effect |
| `wearing_helmet` | Items | Wearing helmet |
| `wearing_chestplate` | Items | Wearing chestplate |
| `wearing_leggings` | Items | Wearing leggings |
| `wearing_boots` | Items | Wearing boots |
| `item_level_above` | Items | Item level above |
| `item_level_below` | Items | Item level below |
| `item_level_equals` | Items | Item level equals |
| `above_balance` | Economy | Balance above |
| `below_balance` | Economy | Balance below |
| `can_afford_price` | Economy | Can afford price |
| `above_points` | Economy | Points above |
| `below_points` | Economy | Points below |
| `points_equal` | Economy | Points equal |
| `above_global_points` | Economy | Global points above |
| `below_global_points` | Economy | Global points below |
| `global_points_equal` | Economy | Global points equal |
| `item_points_above` | Economy | Item points above |
| `item_points_below` | Economy | Item points below |
| `item_points_equal` | Economy | Item points equal |
| `above_xp_level` | Economy | XP level above |
| `below_xp_level` | Economy | XP level below |
| `has_permission` | Permissions | Has a permission |
| `has_completed_advancement` | Permissions | Completed an advancement |
| `placeholder_greater_than` | Placeholder | Placeholder >= value |
| `placeholder_less_than` | Placeholder | Placeholder <= value |
| `placeholder_equals` | Placeholder | Placeholder = value |
| `placeholder_contains` | Placeholder | Placeholder contains string |
| `is_expression_true` | Placeholder | Expression is true |
| `any_of` | Logic | Any condition met |
| `at_least_of` | Logic | At least N conditions met |

📝 **Editor's Note:** The full 114-condition list is available in the sidebar. Conditions marked with external plugin names (e.g. WorldGuard, McMMO, Lands) require those plugins to be installed.

## Related Pages

- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
- [All Mutators](../mutators/)
