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

📝 **Editor's Note:** EcoEnchants does not have plugin-exclusive conditions or mutators — it uses the shared libreforge libraries. It **does** ship one exclusive effect (`apply_random_enchant`) and one exclusive trigger (`enchant_<type>`), documented below.

## Source-Level Config Details

The following details come straight from the EcoEnchants source code and are not covered by the official wiki.

### Plugin Dependencies (`dependencies`)

An enchantment can declare a list of plugin names it depends on:

```yaml
dependencies:
  - EcoSkills
  - MMOCore
```

If any listed plugin is **not installed**, the enchantment fails to load (`MissingDependencyException`). During a live reload you will be prompted to install the missing plugins; pre-loaded enchantments are silently skipped.

> Source: `enchant/impl/LibreforgeEcoEnchant.kt:26-34` (dependency check in `init`), `enchant/EcoEnchants.kt:70-72, 89-91`.

### Enchantments Without an `effects` Key Are Not Loaded

A config file in `/enchants/` is completely ignored if it has no `effects` key:

```kotlin
if (!config.has("effects")) {
    return
}
```

This means a config with only display/rarity/obtaining options is not registered as an enchantment. You can use this to keep "disabled" or work-in-progress enchantments in the folder without them taking effect.

> Source: `enchant/EcoEnchants.kt:59-61` and `78-80` (`acceptPreloadConfig` / `acceptConfig`).

### Automatic `%<id>_name%` Placeholder

Every registered enchantment automatically registers the placeholder `%<id>_name%`, which returns the formatted display name of the enchantment:

```kotlin
PlayerlessPlaceholder(plugin, "${id}_name") {
    this.getFormattedName(0, false)
}.register()
```

For an enchantment with the ID `razor`, the placeholder is `%razor_name%`.

> Source: `enchant/impl/EcoEnchantBase.kt:103-105`.

### Automatic `ecoenchants.fromtable.<id>` Permission

Every enchantment automatically registers a Bukkit permission node `ecoenchants.fromtable.<id>` (default `true`), plus a wildcard parent `ecoenchants.fromtable.*`. The permission controls whether the player can obtain the enchantment from an enchanting table.

> Source: `enchant/impl/EcoEnchantBase.kt:108-131`, checked at `mechanics/EnchantingTableSupport.kt:89`.

### `conflicts` Supports the `all` / `everything` Wildcard

Listing `all` or `everything` (case-insensitive) in the `conflicts` list makes the enchantment conflict with **every** other enchantment:

```yaml
conflicts:
  - all
```

Additionally, conflict matching is **two-way** and case-insensitive, and the `required` list is also matched case-insensitively.

> Source: `enchant/impl/EcoEnchantBase.kt:50-53` (`conflictsWithEverything`), `147-155`.

### How Enchantments Decide if They Can Be Applied

`canEnchantItem` (used by the enchanting table, anvil, and `apply_random_enchant`) requires **all** of the following:

- The number of enchantments of the same **type** on the item is below that type's `limit` (from `types.yml`);
- No enchantment on the item **conflicts** (two-way, including the `all`/`everything` wildcard);
- All enchantments in `required` are already present;
- The total enchant count is below `anvil.enchant-limit` in `config.yml`;
- The item is an enchanted book, or it matches one of the enchantment's `targets`.

> Source: `enchant/EcoEnchantLike.kt:58-89`.

### `enchant_<type>` Triggers Fire 2 Ticks After the Enchant

The `enchant_<type>` trigger does not fire instantly on `EnchantItemEvent` — it schedules the check **2 ticks later** (`runLater(..., 2)`) to let the vanilla enchanting logic finish. The `value` parameter is the XP level cost and `text` is the enchantment type ID.

> Source: `libreforge/TriggerEnchantType.kt:42-59`.

### EcoEnchants-Exclusive Effect: `apply_random_enchant`

EcoEnchants ships one exclusive effect: `apply_random_enchant`. It applies a random enchantment to the triggering item:

```yaml
- id: apply_random_enchant
  args:
    types: []          # Optional: only these enchantment types
    rarities: []       # Optional: only these rarities
    enchants: []       # Optional: only these enchantment IDs
    allow_unsafe: false # If true, ignores target/conflict/level-cap restrictions
```

If `types`, `rarities` and `enchants` are all empty, any enchantment can be chosen; with `allow_unsafe: false` only enchantments the item can normally receive are selected. A random level between 1 and the enchantment's `max-level` is applied (a stored enchant for enchanted books).

> Source: `libreforge/EffectApplyRandomEnchant.kt:15-88`.

### How `%level%` Is Injected

`%level%` works in effects, conditions, and description placeholders because EcoEnchants registers a **holder placeholder provider** for `EcoEnchantLevel` that exposes the enchantment level as a `level` named value:

```kotlin
registerHolderPlaceholderProvider<EcoEnchantLevel> { it, _ ->
    listOf(NamedValue("level", it.level))
}
```

Every enchant level is a libreforge *holder*; when an effect or condition tied to that holder runs, `%level%` evaluates to its enchantment level. In enchantment descriptions, `level` is also injected directly into the `placeholders` expressions (`EcoEnchantLike.getRawDescription`).

> Source: `EcoEnchantsPlugin.kt:84-88`, `enchant/EcoEnchantLike.kt:111-118`.

### Vanilla Enchantments Are Configurable Too

Vanilla enchantments can be customized in `vanillaenchants.yml` — each entry sets a custom `max-level` and `conflicts`:

```yaml
sharpness:
  max-level: 10
  conflicts: [ ]
```

> Source: `enchant/VanillaEnchantments.kt:7-15`.

### Fine-Grained Discoverability & GUI Visibility

Besides the boolean `discoverable`, you can restrict individual discovery methods with a map — missing sub-keys default to `true`, and a plain `false` disables all methods:

```yaml
discoverable:
  chests: true
  fishing: true
  mob-drops: true
  raids: true
hide-from-enchantgui: false
```

`hide-from-enchantgui: true` hides the enchantment from the `/enchants` GUI.

> Source: `enchant/impl/EcoEnchantBase.kt:89-99`.

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
