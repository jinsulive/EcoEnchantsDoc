---
title: Effect Basics
titleZh: Effect 基础
category: guide
outline: deep
---

# ⚙️ Effect Basics

> The Effect system is the heart of libreforge. This page explains how effects are structured in YAML, how the different sections work together, and the universal arguments available on every effect.

## Two Types of Effects

There are two types of effects:

| Type | Description |
|------|-------------|
| **Triggered** | Requires at least one [trigger](../triggers/) to activate |
| **Permanent** | Always active while all [conditions](../conditions/) (optional) are met — no trigger needed |

## Example Effect Config

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

**What this does:** 25% chance to spawn 10 soul particles in the center of a diamond ore when it is mined, while the player is below Y level 10.

## The Effects Section

An effect is the action that gets executed — the core functionality, such as dealing damage, spawning particles, giving money, or sending messages. Each effect has:

- **`id`** — What the effect does (find all under [All Effects](../effects/))
- **`args`** — Parameters that configure how the effect behaves (plus optional universal args, see below)

```yaml
effects:
  - id: spawn_particle # The ID of the effect
    args: # The args for the effect (from the effect page)
      amount: 10
      particle: soul
```

## The Triggers Section

A trigger is the event or action that causes the effect to run — mining a block, attacking an entity, taking damage, jumping, and so on. **Triggered effects require at least one trigger.** Permanent effects do not use triggers.

```yaml
    triggers: # The list of triggers that activate this effect (not for permanent effects)
      - mine_block
```

See [All Triggers](../triggers/) for the full list.

## The Filters Section

Filters narrow down when an effect should activate by restricting the trigger to specific targets. For example, you can filter a `mine_block` trigger to only apply when mining diamond ore, or filter a `melee_attack` trigger to only apply when attacking zombies. The available filters depend on the trigger being used.

```yaml
    filters: # The list of filters to be applied on the trigger
      blocks: # e.g. "blocks" filter on mine_block trigger
        - diamond_ore
        - deepslate_diamond_ore
```

## The Conditions Section

Conditions are requirements that must be met for the effect to activate. They check things like the player's Y level, the world they are in, or whether they have a permission. Each effect holder (Talisman, Reforge, Enchant, etc.) has its own conditions, and you can also specify **effect-specific conditions** that work the same way.

```yaml
    conditions: # (Optional) Effect-specific conditions
      - id: below_y
        args:
          y: 10
```

See [Configuring a Condition](#the-conditions-section) and the [Conditions](../conditions/) reference.

::: tip Configuring a Condition
Conditions consist of an ID and arguments. Every condition also supports an optional `inverse` argument that negates it, plus `not-met-lines` and `not-met-effects` for item plugins. See [Configuring a Condition](#the-conditions-section) for details.
:::

## The Mutators Section

Mutators modify the data passed to an effect **before it runs**. They allow you to change parameters such as the location, the victim, or the player. For example, a `translate_location` mutator can shift where a particle spawns. Like effects and conditions, a mutator consists of an ID and arguments.

```yaml
    mutators: # (Optional) Mutate the data sent to the effect
      - id: translate_location
        args:
          add_x: 0.5
          add_y: 0.5
          add_z: 0.5
```

## Optional Arguments (Universal)

All of these go inside the `args` section of an effect:

### Chance

```yaml
args:
  chance: 50 # (Optional) The chance of this effect activating, as a percentage (defaults to 100)
```

### Cost

```yaml
args:
  cost: 200 # (Optional) The cost required to activate this effect, requires Vault (defaults to 0)
```

### Every

```yaml
args:
  every: 3 # (Optional) The effect will activate every x times (defaults to always)
```

### Require

```yaml
args:
  require: '%ecobits_crystals% > 4' # (Optional) Require an expression to be true for the effect to run
```

### Cooldown

```yaml
args:
  cooldown: 10 # The cooldown between effect activations, in seconds (defaults to 0)
  cooldown_group: magic_abilities # (Optional) The cooldown group; if unset, cooldown applies to this effect only
  send_cooldown_message: true # (Optional) If the cooldown message should be sent
  cooldown_message: "Custom cooldown message with %seconds% left" # (Optional) A custom cooldown message
  cooldown_effects: # (Optional) Effects to run if on cooldown
    - id: send_message
      args:
        message: "You are on cooldown! Try again in &a%seconds%&r seconds."
```

### Mana Cost

```yaml
args:
  mana_cost: 10 # (Optional) Mana cost to activate, requires AuraSkills (defaults to 0)
```

For EcoSkills, use `<magic>_cost` (e.g. `mana_cost`) to specify a magic cost (defaults to 0).

### Delay

```yaml
args:
  delay: 20 # (Optional) The amount of ticks to wait before executing the effect (defaults to 0)
```

### Repeat

```yaml
args:
  repeat: # (Optional) The effect will activate repeatedly, delaying between repeats if delay is set
    times: 5 # How many times the effect should be repeated
    start: -10 # The initial value of the %repeat_count% placeholder
    increment: 10 # How much the count is increased (or decreased) by on each repeat
```

If the effect has any mutators, they run again for each repeat. This provides new placeholders: `%repeat_times%`, `%repeat_start%`, `%repeat_increment%`, and `%repeat_count%`.

### Price

```yaml
args:
  price: # (Optional) The price required to activate this effect; supports money, items, points, second currencies, etc.
    value: 100 * %player_y% # The value of the price, supports math expressions
    type: crystals # The price type
    display: "&b%value% Crystals ❖" # The display name of the price
```

Read more about the [price system](../guide/effect-basics#the-price-system).

### Run Order

```yaml
args:
  run-order: early # (Optional) The order the effect should run in: start, early, normal, late, or end
```

Effects have default run orders (used to make effects work together properly), but this option overrides them — e.g. make `add_damage` (defaults to `late`) run before `damage_multiplier` (defaults to `normal`).

### Advanced Options

```yaml
args:
  filters_before_mutation: true # (Optional) Run filters on the un-mutated data instead of after mutation (defaults to false)
  disable_antigrief_check: true # (Optional) Disable antigrief plugin checks for this effect (defaults to false)
  custom_<id>: # (Optional) Use a custom effect argument
    <arg 1>: <value>
    <arg 2>: <value>
```

## Placeholders & Math Expressions

**Any numeric value (integer, decimal) can be a mathematical expression involving placeholders!**

For example: `chance: 100 - %player_y%` — permanent effects evaluate the expression on activation, and triggered effects evaluate it on each trigger. Only use placeholders with numeric values, or you will get weird behavior.

If the victim is a player, you can supply any placeholder prefixed with `victim_` (e.g. `%victim_player_y%`).

### Extra Placeholders

| Placeholder | Value | Aliases |
|-------------|-------|---------|
| `%trigger_value%` | The value passed by the trigger (e.g. amount of damage dealt) | `%triggervalue%`, `%trigger%`, `%value%`, `%tv%`, `%v%`, `%t%` |
| `%alt_trigger_value%` | The alt-value passed by the trigger | `%alttriggervalue%`, `%altvalue%`, `%atv%`, `%av%`, `%at%` |
| `%player%` | The player's name | — |
| `%player_uuid%` | The player's UUID | — |
| `%victim_health%` | The victim's health | — |
| `%victim_max_health%` | The victim's max health | — |
| `%distance%` | Distance between the player and the victim | — |
| `%victim_level%` | The victim's level (**Requires LevelledMobs**) | — |
| `%hits%` | The amount of times the player has hit the victim | — |
| `%text%` | The message text from the trigger, e.g. a chat message | `%string%`, `%message%` |
| `%location_x%` | X coordinate of the location | `%loc_x%`, `%x%` |
| `%location_y%` | Y coordinate of the location | `%loc_y%`, `%y%` |
| `%location_z%` | Z coordinate of the location | `%loc_z%`, `%z%` |
| `%location_block_x%` | X coordinate of the block location | `%loc_b_x%`, `%block_x%`, `%bx%` |
| `%location_block_y%` | Y coordinate of the block location | `%loc_b_y%`, `%block_y%`, `%by%` |
| `%location_block_z%` | Z coordinate of the block location | `%loc_b_z%`, `%block_z%`, `%bz%` |
| `%location_world%` | The world name of the location | `%loc_w%`, `%world%` |

### Math Syntax

Math expressions are supported almost everywhere. Common syntax: `()`, `+`, `-`, `/`, `*`, `^`, `round()`, `ceil()`, `floor()`, `random(min,max)`, `min()`, `max()`. See [Math Expressions](../guide/effect-basics#math-expressions) for the full list.

## Load Weight

All configs are loaded alphabetically by default. If a config depends on another one, add `load-weight: <weight>` to change the load order. All configs default to a load weight of **100**, loaded in ascending order — a config with weight 10 loads before one with weight 20.

## Related Pages

- [EcoEnchants Specific](./ecoenchants-specific) — how enchants use the effect system
- [All Effects](../effects/) — every effect reference
- [Configuring a Condition](../guide/effect-basics) — condition configuration
- [Configuring an Effect Chain](./effect-basics#effect-chains) — chain multiple effects
