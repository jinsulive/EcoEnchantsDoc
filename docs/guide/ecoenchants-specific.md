---
title: EcoEnchants Specific
titleZh: EcoEnchants 专属
category: guide
outline: deep
---

# 🔮 EcoEnchants Specific

> EcoEnchants is an enchantment plugin powered by eco and libreforge. This page explains how enchantments are configured, how the effect system integrates with enchantment levels, and EcoEnchants-specific additions to the effect system.

## Enchantment Config Files

Each enchantment is its own config file placed in the `/enchants/` folder. You can add or remove them freely — an example config called `_example.yml` is included.

**The ID of the enchantment is the file name.** This is what you use in commands and in the Item Lookup System. IDs must be lowercase letters, numbers, and underscores only.

## Example Enchantment Config

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

## The Enchantment Display Section

```yaml
display-name: "Example" # The name of the enchantment in-game
description:
  - "Gives a &a%placeholder%%&8 bonus to damage" # The description of the enchantment
placeholder: "%level% * 20" # The placeholder to show in the enchantment description
placeholders: # [Optional] You can also create multiple placeholders
  example: "%level% * 800"
type: normal # The enchantment type, from types.yml
```

## The Enchantment Mechanics Section

```yaml
targets: # The items the enchantment can be applied to, see targets.yml
  - sword
conflicts: # The enchantments that conflict with this
  - sharpness
required: # The enchantments that must already be present to apply this one
  - unbreaking
rarity: common # The rarity of the enchantment, see rarity.yml
max-level: 4 # The max level of the enchantment
```

## Obtaining the Enchantment

```yaml
tradeable: true # If the enchantment can be obtained from villagers
discoverable: true # If the enchantment can generate naturally in chests
enchantable: true # If the enchantment can be obtained from enchanting tables
```

## The Effects Section

The effects section is the core functionality of the enchantment. You can configure effects, conditions, filters, mutators and triggers here to run while the enchant is active. **Use `%level%` as a placeholder for the enchantment level.**

```yaml
# The effects of the enchantment (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
# Use %level% as a placeholder for the enchantment level
effects:
  - id: damage_multiplier
    args:
      multiplier: 1 + 0.2 * %level%
    triggers:
      - melee_attack

# The conditions required to use the enchantment,
# you can use %level% as a placeholder here too
conditions: [ ]
```

### Level-Based Scaling

The `%level%` placeholder returns the level of the custom enchantment. It is the key to creating enchantments that get stronger as the level increases. Combine it with math expressions for powerful scaling:

```yaml
effects:
  - id: damage_multiplier
    args:
      multiplier: 1 + 0.2 * %level%   # 1.2x at level 1, 1.4x at level 2, ...
    triggers:
      - melee_attack
```

::: tip 💡 Tip
Any numeric arg can use `%level%` inside a math expression. Permanent effects evaluate on activation; triggered effects evaluate on each trigger.
:::

## Internal Placeholders

| Placeholder | Value |
|-------------|-------|
| `%level%` | Returns the level of the custom enchantment. Useful for creating enchantments that get stronger as the level increases. |

## Enchantment Types

Vanilla Minecraft has 2 types: **Normal** and **Curse**. EcoEnchants expands the metagame:

| Type | Description |
|------|-------------|
| **Normal** | Straightforward enchantments that generally improve the item |
| **Curse** | The opposite of normal — make the item worse and weaker |
| **Special** | More powerful than normal; by default only one special enchantment per item, forcing item specialization |
| **Spell** | Abilities activated by alt-click while holding the item; a cooldown starts after each activation |
| **Artifact** | Purely cosmetic enchantments; create particles depending on the item they're applied to |

You can create as many enchantment types as you want, in `types.yml`.

## Rarity

Rarity is mostly hidden from players and controls how enchantments can be obtained. A rarity consists of:

- The minimum XP level required to get the enchantment from an enchanting table
- The percentage chance for the enchantment to be applied when enchanting above that minimum level
- The percentage chance for a villager to spawn with a trade for it
- The percentage chance for a loot chest item to spawn with it

All values are fully configurable in `rarity.yml`; create, edit, and delete as many rarities as you want.

## Means of Obtaining

By default, all enchantments are available from **Enchanting Tables**, **Villagers**, and **Loot Chests** — configurable per-enchant. Levels are calculated based on cost; loot chests generally contain higher-level enchantments. Some types (special by default) are biased so it is extremely rare to obtain them above level 1 or 2.

## Targets

Targets are the items that can be enchanted — melee weapons, tools, armor pieces, elytra, fishing rods, etc. Create your own targets in `targets.yml` (e.g. exclusive diamond/netherite enchantments).

For custom enchants made in config, specify the slot for any target by adding an extra entry to the items list:

```yaml
- slot: hands  # For enchantments that check items in hands (tools, weapons, bows, tridents)
- slot: armor  # For enchantments that check armor
- slot: any    # For enchantments that work anywhere in the inventory
```

## EcoEnchants-Specific Triggers

| Trigger | Description | Value |
|---------|-------------|-------|
| `enchant_<type>` | Triggered when enchanting an item with a certain type of enchantment (e.g. `enchant_normal`) | `value: The xp cost` |

📝 **Editor's Note:** EcoEnchants does not have plugin-exclusive effects, conditions, or mutators — it uses the shared libreforge `/effects/` library. The only EcoEnchants-specific addition to the effect system is the `enchant_<type>` trigger.

## Plugin Config Highlights

The main `config.yml` controls enchanting-table, villager, loot, anvil, display, GUI behavior, and more:

```yaml
enchanting-table:
  enabled: true
  book-multiplier: 0.5
  maximum-obtainable-level: 30
  cap: 5
  reduction: 2.2

anvil:
  cost-exponent: 0.95 # See "Advanced Configuration" below
  enchant-limit: -1
  max-repair-cost: 40
  clamp-repair-cost: true
```

## Advanced Configuration: Cost Exponent

Cost exponent is a feature of anvils that increases or decreases cost based on the original cost:

```go
cost = level^exponent + 1
```

With an exponent of `1.02` and an original cost of `25`: `25^1.02 + 1 = 28` (rounded up).

| Exponent | Difficulty |
|----------|------------|
| `0.8` | Easy |
| `0.9` | Balanced |
| `1.0` | Vanilla-like |
| `1.2` | Harder |

## Advanced Configuration: Type Bias

You can bias enchantment levels according to a curve to make types (e.g. special) extremely rare. A random number between 0 and 1 is generated, then biased — more inputs give lower outputs, so 0.7 may become 0.1, and only inputs like 0.99 become 0.6+. Increasing bias towards 1 makes low-level enchants more likely; lowering towards -1 makes high-level more likely.

## Related Pages

- [Effect Basics](./effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
