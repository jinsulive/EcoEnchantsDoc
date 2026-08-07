---
title: Examples
titleZh: 配置示例
category: examples
outline: deep
---

# 💡 Examples

> Ready-to-use configuration recipes for common scenarios. Each example combines **Effects**, **Triggers**, **Conditions**, **Filters**, and **Mutators** into a complete, copy-pasteable config.

::: tip How to use these examples
Every example below is written as an **EcoEnchants enchantment config** (one file per enchant under `plugins/EcoEnchants/enchants/`). The same structure applies to any other eco plugin — swap the enclosing sections as needed. Replace IDs, names, and values with your own.
:::

## 1. Basic Custom Enchantment

The simplest enchantment: mine a diamond ore and get a message plus extra XP.

```yaml
# plugins/EcoEnchants/enchants/gem_eye.yml
display-name: "&bGem Eye"
description:
  - "&7Mining diamonds grants bonus XP"
max-level: 3

effects:
  - id: give_xp
    args:
      amount: "25 * %level%" # Scales with enchantment level
    triggers:
      - mine_block
    filters:
      blocks:
        - diamond_ore
        - deepslate_diamond_ore
```

**What this does:** When the player mines a diamond ore, they receive `25 × enchantment level` experience points. Level 1 = 25 XP, level 3 = 75 XP.

## 2. Critical Strike with Cooldown

An aggressive combat enchant that multiplies crit damage, with a cooldown to prevent spam.

```yaml
# plugins/EcoEnchants/enchants/executioner.yml
display-name: "&cExecutioner"
description:
  - "&7Critical hits deal &cx3 &7damage"
max-level: 1

effects:
  - id: damage_multiplier
    args:
      multiplier: 3
      cooldown: 5 # 5 seconds between activations
    triggers:
      - crit
```

**What this does:** Every critical hit deals 3× damage, but the effect can only activate once every 5 seconds.

## 3. Auto-Smelt Pickaxe

Combine effects on the same trigger to auto-smelt ores with a matching visual effect.

```yaml
# plugins/EcoEnchants/enchants/forged_pick.yml
display-name: "&6Forged Pick"
description:
  - "&7Automatically smelts mined ores"
max-level: 3

effects:
  - id: autosmelt
    args:
      drop_xp: true
    triggers:
      - mine_block

  - id: spawn_particle
    args:
      particle: flame
      amount: 5
      chance: 50
    triggers:
      - mine_block
```

**What this does:** Mined ores are smelted automatically (furnace XP is also dropped), with a 50% chance to spawn flame particles.

## 4. Money Per Kill

Reward the player with money from the server economy for each zombie slain.

```yaml
# plugins/EcoEnchants/enchants/bounty_hunter.yml
display-name: "&aBounty Hunter"
description:
  - "&7Earn money for defeating zombies"
max-level: 5

effects:
  - id: give_money # Requires Vault
    args:
      amount: "50 * %level%"
    triggers:
      - kill_entity
    filters:
      entities:
        - zombie
```

**What this does:** Every zombie kill pays the player `50 × level`. Level 5 = 250 per zombie.

## 5. Area-of-Effect Aura (AOE Buff)

A permanent effect that buffs everyone within a radius — no trigger required.

```yaml
# plugins/EcoEnchants/enchants/aura_of_war.yml
display-name: "&dAura of War"
description:
  - "&7Nearby allies gain extra damage"
max-level: 2

effects:
  - id: add_permanent_holder_in_radius
    args:
      radius: 10
      apply-to-self: true
      effects:
        - id: damage_multiplier
          args:
            multiplier: "1 + (0.1 * %level%)"
```

**What this does:** While equipped, the player and everyone within 10 blocks gets a `damage_multiplier` of `1.1` at level 1 and `1.2` at level 2.

## 6. Active Ability: Right-Click Teleport

A triggered effect that requires an action — teleport forward when the player right-clicks.

```yaml
# plugins/EcoEnchants/enchants/blink.yml
display-name: "&bBlink"
description:
  - "&7Right click to teleport forward"
max-level: 1

effects:
  - id: blink
    args:
      distance: "5 + (5 * %level%)"
    triggers:
      - right_click
    conditions:
      - id: is_sneaking
        args:
          inverse: true # Only works while not sneaking
```

**What this does:** Right-clicking teleports the player forward 10 blocks (level 1), and they must not be sneaking.

## 7. Combining Multiple Effects on One Trigger

Effects on the same trigger all run — here a fire aspect that also knocks the victim away.

```yaml
# plugins/EcoEnchants/enchants/dragon_claw.yml
display-name: "&4Dragon Claw"
description:
  - "&7Ignites victims and knocks them away"
max-level: 3

effects:
  - id: ignite
    args:
      damage_per_tick: 4
      ticks: "20 + (20 * %level%)"
    triggers:
      - melee_attack

  - id: knock_away
    args:
      velocity: "0.2 + (0.1 * %level%)"
    triggers:
      - melee_attack
```

**What this does:** Every melee hit ignites the victim and knocks them back. The fire duration and knockback velocity both scale with level.

## 8. Using Mutators to Change the Target

Mutators can redirect an effect — here, spawn particles at the **victim's** location instead of the player's.

```yaml
# plugins/EcoEnchants/enchants/bloodburst.yml
display-name: "&cBloodburst"
description:
  - "&7Blood particles burst from your victim"
max-level: 1

effects:
  - id: spawn_particle
    args:
      particle: redstone
      amount: 20
    triggers:
      - melee_attack
    mutators:
      - id: set_location
        args:
          x: "%victim_location_x%"
          y: "%victim_location_y%"
          z: "%victim_location_z%"
```

**What this does:** On every melee attack, 20 redstone particles spawn at the victim's location.

## 9. Effect Chains & Reusable Chains

Use an **effect chain** to group multiple effects, then reference it from anywhere with `run_chain`.

```yaml
# plugins/EcoEnchants/enchants/royal_welcome.yml
display-name: "&eRoyal Welcome"
description:
  - "&7A celebratory firework when you join"
max-level: 1

effects:
  - id: run_chain
    args:
      chain: celebrate
    triggers:
      - join
```

```yaml
# plugins/EcoEnchants/chains.yml
chains:
  celebrate:
    - id: firework
      args:
        power: 2
    - id: send_title
      args:
        title: "&eWelcome back!"
    - id: play_sound
      args:
        sound: entity_firework_rocket_launch
```

**What this does:** On join, the player gets a firework, a title, and a sound — all defined once in a reusable chain.

## Common Patterns

| Pattern | How |
|---------|-----|
| **Chance-based** | `args: { chance: 25 }` on any effect |
| **Level-scaled values** | Use `%level%` in any numeric arg, e.g. `amount: "10 * %level%"` |
| **Cooldown** | `args: { cooldown: 5, cooldown_group: shared }` |
| **Expensive abilities** | `args: { cost: 200, mana_cost: 10 }` (require Vault / AuraSkills) |
| **Delayed / repeated** | `args: { delay: 20, repeat: { times: 3, increment: 1 } }` |
| **Trigger-based math** | `amount: "%v% * 0.5"` to use the trigger's value (e.g. damage dealt) |
| **Require expression** | `args: { require: "%player_level% > 10" }` |

## Related Pages

- [Effect Basics](../guide/effect-basics) — how effects, triggers, filters, conditions & mutators fit together
- [Glossary](../glossary) — terms explained in plain language
- [All Effects](../effects/) — every effect with parameters
- [All Triggers](../triggers/) — every trigger
- [All Conditions](../conditions/) — every condition
