---
title: Eco Core Library
titleZh: Eco 核心库
category: guide
outline: deep
---

# ⚙️ Eco Core Library

> The **eco** library is the shared core underneath every Auxilor plugin. It provides the mathematical expression engine used by all effect/condition arguments, the price system, points, item-level data, and more. This page documents the capabilities that the official wiki leaves out, straight from the eco source.

## Mathematical Expressions

Almost every numeric argument in libreforge accepts a **math expression**. Expressions are compiled once and cached, and can contain `%placeholders%`, functions, constants, and operators.

### Functions

**Unary functions** (single argument, prefix form):

| Function | Meaning | Notes |
|----------|---------|-------|
| `sin(x)`, `cos(x)`, `tan(x)` | Trigonometry | Radians |
| `asin(x)`, `acos(x)`, `atan(x)` | Inverse trigonometry | Radians |
| `sinh(x)`, `cosh(x)`, `tanh(x)` | Hyperbolic trigonometry | |
| `abs(x)` | Absolute value | |
| `round(x)` | Round to nearest integer | |
| `floor(x)` / `ceil(x)` | Round down / up | |
| `sqrt(x)` | Square root | |
| `cbrt(x)` | Cube root | |
| `log(x)` | **Natural** logarithm (ln) | Not base-10 |
| `rand(x)` | Random value in `[0, x)` | Non-deterministic |

**Binary functions** (comma-separated arguments):

| Function | Meaning |
|----------|---------|
| `min(a, b)` | The smaller of `a` and `b` |
| `max(a, b)` | The larger of `a` and `b` |
| `random(a, b)` | Random value in `[a, b]` |

### Constants

| Constant | Value |
|----------|-------|
| `PI` | π (3.14159…) |
| `E` | Euler's number (2.71828…) |
| `TRUE` | `1.0` |
| `FALSE` | `0.0` |

### Operators

| Operator | Meaning | Notes |
|----------|---------|-------|
| `+` `-` `*` `/` | Arithmetic | |
| `^` | Exponent (power) | Right-associative |
| `%` | Modulus | |
| `E` | Scientific notation (`a E b` = `a × 10^b`) | Right-associative, e.g. `2E3` = `2000` |
| `<` `>` `=` `==` `!=` `>=` `<=` | Comparisons | Result is `1.0`/`0.0` |
| `&` `&&` | Boolean AND | `1.0`/`0.0` |
| `\|` `\|\|` | Boolean OR | `1.0`/`0.0` |
| `!` | Boolean NOT (prefix) | `1.0`/`0.0` |
| `-` | Negation (prefix) | |

**Examples:**

```yaml
multiplier: "1 + 0.2 * %level%"       # level-based scaling
damage: "min(10, 2 * %level%)"        # capped scaling
speed: "%player_y% / 10 + rand(5)"    # uses player placeholders + randomness
chance: "10 + 5 * (PI > 3)"           # 15 (comparison is 1)
```

> Source: `eco-core/core-plugin/.../internal/spigot/math/token/BinaryOperator.kt`, `UnaryOperator.kt`, `Constant.kt`, `functional/ExpressionEnv.kt` (registers `min`/`max`/`random`).

### Placeholders Inside Expressions

`%placeholder%` tokens are resolved to numbers before evaluation. Any placeholder can be used — player placeholders like `%player_y%`, holder placeholders like `%level%`, or PAPI placeholders registered in eco. The expression engine (`ExpressionEvaluator`) caches both compiled expressions and recent results.

> Source: `eco-core/core-plugin/.../internal/spigot/math/ExpressionEvaluator.kt` (`findPlaceholders`, result cache), `eco-api/.../util/NumberUtils.java` (`evaluateExpression`).

## The Price System

A **price** is a value combined with a currency type. Prices are created from a `value` expression and a `type` name — used by the universal `price` argument on effects, `pay_price`, `give_price`, and `can_afford_price`.

### Type Resolution (Fallback Order)

`Prices.create(value, type)` resolves the type in this exact order:

1. **No type** (`null`) → default to **economy** (Vault/Treasury).
2. **Registered factory** name → that factory (see aliases below).
3. **Otherwise** → the type is treated as an **item** (`Items.lookup(type)`):
   - If the item lookup fails → the price becomes **free** (`PriceFree`);
   - Otherwise it becomes an **item price** (`PriceItem`) paid in that item.

```yaml
# In an effect's args:
price:
  value: 50 + 10 * %level%
  type: xp          # XP points
price:
  value: 3
  type: diamond     # Any item ID works
```

> Source: `eco-api/.../core/price/Prices.java:127-155`.

### Built-in Price Types & Aliases

| Type | Aliases | Requires |
|------|---------|----------|
| Economy | `coins`, `$` (also used when `type` is missing) | Vault/Treasury |
| XP points | `xp`, `exp`, `experience` | — |
| XP levels | `l`, `levels`, `xplevels`, `explevels` | — |
| Player Points | `player_points`, `p_points` | PlayerPoints |
| CoinsEngine currency | `<currency-id>` | CoinsEngine |
| RoyaleEconomy currency | `<currency-id>` | RoyaleEconomy |
| UltraEconomy currency | `<currency-name>` | UltraEconomy |

> Source: `eco-core/core-backend/.../internal/price/PriceFactoryEconomy.kt`, `PriceFactoryXP.kt`, `PriceFactoryXPLevels.kt`; `core-plugin/.../integrations/price/PriceFactoryPlayerPoints.kt` and the CoinsEngine/RoyaleEconomy/UltraEconomy factories; registration at `internal/spigot/EcoSpigotPlugin.kt:338-340, 537-553`.

### Price Behavior

Every price supports the same operations: `canAfford(player, multiplier)`, `pay(player, multiplier)`, `giveTo(player, multiplier)`, and a per-player `multiplier` (`getMultiplier`/`setMultiplier`) that scales the displayed value. `getValue` always includes the player multiplier.

> Source: `eco-api/.../core/price/Price.java`, `price/impl/PriceEconomy.java:68-106`.

## Points

Points are a generic key-value currency stored per player (or globally) and accessed through effects like `add_points`, `set_points`, `give_points`, conditions like `above_points`, and placeholders.

### Player & Global Points

- `player.points` reads/writes the **player's profile**;
- `globalPoints` reads/writes the **server profile** (shared by everyone).

Points are stored as **doubles** in PDC keys named `eco:points_<type>`. They are initialized **on demand**: the first access to a point type registers a matching `PointPriceFactory`, so every point type automatically becomes a usable `type` in the price system with identifier `libreforge:point_<type>`.

> Source: `libreforge/.../Points.kt` (`PointsMap`, `PointPriceFactory`, `globalPoints`, `Player.points`).

### Points Placeholders & Friendly Names

- `%points_<type>%` — the player's points of `<type>` (e.g. `%points_magic%`);
- `%global_points_<type>%` — the global/server points of `<type>`.

You can rename a point type in `point-names` in the plugin's `config.yml`:

```yaml
point-names:
  magic: "Mana"
```

> Source: `libreforge/.../Points.kt` (`pointsPlaceholder`, `globalPointsPlaceholder`, `toFriendlyPointName`).

### Item Points

Items can carry their own points, stored in the item's PDC under `libreforge:item_points`. Access them with effects like `give_item_points`, `set_item_points`, `multiply_item_points` and the `%item_points_<type>%` placeholder.

> Source: `libreforge/.../ItemPoints.kt`.

## Custom Effect Arguments (`custom_<id>`)

Inside an effect's `args`, any key starting with `custom_` is **not a regular argument** — it delegates to a **custom effect argument** registered in the `/arguments/` config folder:

```yaml
args:
  custom_mycheck:
    is-met:
      - id: above_y
        args:
          y: 100
    if-met:
      - id: send_message
        args:
          message: "You are above Y 100!"
    if-not-met:
      - id: send_message
        args:
          message: "You are below Y 100."
```

Every key inside the `custom_<id>` section is additionally injected as a placeholder, and the `is-met` conditions decide whether the effect's `if-met` or `if-not-met` chain runs. When the argument ID is not registered, the effect argument silently does nothing.

> Source: `libreforge/.../effects/arguments/EffectArguments.kt:23-29`, `effects/arguments/custom/ArgumentCustom.kt`, `effects/arguments/custom/CustomEffectArgument.kt`, `CustomEffectArguments.kt`.

## Effect Weight & Random Chains

### The `weight` Key

Every effect block in a chain supports a top-level `weight` key (default `1.0`). It can be a **math expression** evaluated per trigger, so it can use placeholders like `%level%`:

```yaml
effects:
  - id: give_xp
    weight: 3
    args:
      amount: 100
    triggers:
      - melee_attack
  - id: give_money
    weight: 1 + %level% / 2
    args:
      amount: 50
    triggers:
      - melee_attack
```

Weights only matter when the chain runs with the **`random` executor** — the effect is then chosen randomly, with probability proportional to its weight. A weight of `0` excludes the effect; if all weights are `0` an effect is picked uniformly.

> Source: `libreforge/.../effects/Effects.kt:494-500` (default `1.0`, expression), `effects/ChainElement.kt:39-49` (`getWeight` re-evaluated per trigger), `effects/executors/impl/RandomExecutorFactory.kt`.

### Chain Executors

Chains support three executors, set with `run_on` (or similar plugin-specific config):

| Executor | Behavior |
|----------|----------|
| `normal` | Runs every effect in order |
| `cycle` | Runs one effect at a time, cycling through them |
| `random` | Runs one random effect, weighted by `weight` |

> Source: `libreforge/.../effects/executors/ChainExecutors.kt`, `impl/NormalExecutorFactory.kt`, `impl/CycleExecutorFactory.kt`, `impl/RandomExecutorFactory.kt`.

## Item Levels

Items can carry **levels and XP** tracked per "level type", configured by each plugin (e.g. EcoEnchants or EcoArmor). This powers `level_item`, `level_up_item`, `item_level_*` conditions, and the item level placeholders.

### Level Type Config

A level type is defined in config with the following keys:

```yaml
id: mylevel
xp-formula: "100 * %level%"      # XP needed to go from level N to N+1
max-level: 100
requirements: [ 100, 200, 400 ]  # Alternative to xp-formula: explicit list
level-up-effects:
  - id: play_sound
    args:
      sound: entity_player_levelup
```

- `xp-formula` — a math expression evaluated per level; `%level%` is injected.
- `requirements` — an explicit list of XP amounts, index `level - 1`.
- `max-level` — default `Integer.MAX_VALUE`.
- `level-up-effects` — a chain triggered on every level-up, with `%level%` and `%level_numeral%` placeholders.

> Source: `libreforge/.../levels/LevelType.kt`, `levels/LevelData.kt`.

### PDC Storage

Level data is stored on the item's PDC under the key **`libreforge:item_levels`**. Inside it, each level type has its own container with two fields:

- `level` — `INTEGER`
- `xp` — `DOUBLE` (current progress toward the next level)

> Source: `libreforge/.../levels/ItemLevelMap.kt`.

### Item Level / XP / Progress Placeholders

The following placeholders are available (all take a level-type ID as the suffix):

| Placeholder | Value |
|-------------|-------|
| `%item_level_<type>%` | Current level |
| `%item_xp_<type>%` | Current XP into the level |
| `%item_xp_required_<type>%` | XP required for the next level |
| `%item_progress_<type>%` | Progress toward the next level as a percentage |
| `%item_points_<type>%` | The item's points of `<type>` |
| `%item_data_<type>%` | Custom item data string of `<type>` |

Every placeholder also accepts a `_numeral` suffix, e.g. `%item_level_mylevel_numeral%`, to render the value as Roman numerals.

> Source: `libreforge/.../levels/placeholder/ItemPointPlaceholder.kt`, `ItemPointPlaceholders.kt`.

## Item Data

Items can store arbitrary **string** key-value data in PDC under `libreforge:item_data`, manipulated with `set_item_data`, `remove_item_data`, `has_item_data`, and read with `%item_data_<type>%`.

> Source: `libreforge/.../ItemData.kt`.

## Related Pages

- [Effect Basics](./effect-basics)
- [EcoEnchants Specific](./ecoenchants-specific)
- [All Effects](../effects/)
