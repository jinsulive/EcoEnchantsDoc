---
title: Particle Types
titleZh: 粒子类型
category: guide
outline: deep
---

# Particle Types

> This page lists all **115** built-in particle types from the Paper API `org.bukkit.Particle` enum. Use these values in the `particle` argument of effects such as `spawn_particle`, `particle_animation`, and `particle_line`.

## Data Types

The **Data Type** column shows which particles require additional data when spawned through the Bukkit/Paper API:

| Data Type | Meaning |
|-----------|---------|
| `—` (None) | No extra data needed — the particle can be spawned directly. |
| `Particle.DustOptions` | Color and size for colored dust (e.g. `dust`). |
| `Particle.DustTransition` | Start/end color and size for color-transition dust. |
| `Color` | An ARGB/RGB color (e.g. `entity_effect`, `flash`). |
| `BlockData` | A block state (e.g. `block`, `falling_dust`). |
| `ItemStack` | An item stack (e.g. `item`). |
| `Vibration` | A vibration destination and arrival time. |
| `Particle.Trail` | A target location, color, and duration. |
| `Particle.Spell` | A spell type (e.g. `effect`, `instant_effect`). |
| `Float` | A floating-point value (e.g. `dragon_breath`, `sculk_charge`). |
| `Integer` | An integer value (e.g. the `shriek` delay). |

If a particle requires data, you must provide a matching data object when spawning it; otherwise the particle will not render correctly.

## Particle List

| Particle (key) | Java Enum | Data Type | Description |
|----------------|-----------|-----------|-------------|
| `angry_villager` | `ANGRY_VILLAGER` | — | Angry cloud above a villager. |
| `ash` | `ASH` | — | Ash falling in basalt deltas. |
| `block` | `BLOCK` | BlockData | Breaking block particle; requires a BlockData. |
| `block_crumble` | `BLOCK_CRUMBLE` | BlockData | Crumbling block pieces; requires a BlockData. |
| `block_marker` | `BLOCK_MARKER` | BlockData | Block outline marker; requires a BlockData. |
| `bubble` | `BUBBLE` | — | Air bubble rising through water. |
| `bubble_column_up` | `BUBBLE_COLUMN_UP` | — | Upward bubble column. |
| `bubble_pop` | `BUBBLE_POP` | — | Burst when a bubble pops. |
| `campfire_cosy_smoke` | `CAMPFIRE_COSY_SMOKE` | — | Thin smoke from a lit campfire. |
| `campfire_signal_smoke` | `CAMPFIRE_SIGNAL_SMOKE` | — | Thick smoke from a signal campfire. |
| `cherry_leaves` | `CHERRY_LEAVES` | — | Pink petals falling from cherry trees. |
| `cloud` | `CLOUD` | — | White puff of cloud. |
| `composter` | `COMPOSTER` | — | Particles when composting in a composter. |
| `copper_fire_flame` | `COPPER_FIRE_FLAME` | — | Blue-green flame of copper fire. |
| `crimson_spore` | `CRIMSON_SPORE` | — | Spores drifting in crimson forests. |
| `crit` | `CRIT` | — | Small star sparkle from a critical hit. |
| `current_down` | `CURRENT_DOWN` | — | Downward current in a bubble column. |
| `damage_indicator` | `DAMAGE_INDICATOR` | — | Heart showing damage taken, above the entity. |
| `dolphin` | `DOLPHIN` | — | Trail left by a swimming dolphin. |
| `dragon_breath` | `DRAGON_BREATH` | Float | Dragon's breath; requires a Float for spread. |
| `dripping_dripstone_lava` | `DRIPPING_DRIPSTONE_LAVA` | — | Lava dripping from a dripstone. |
| `dripping_dripstone_water` | `DRIPPING_DRIPSTONE_WATER` | — | Water dripping from a dripstone. |
| `dripping_honey` | `DRIPPING_HONEY` | — | Honey dripping from a block. |
| `dripping_lava` | `DRIPPING_LAVA` | — | Lava drop dripping from a block. |
| `dripping_obsidian_tear` | `DRIPPING_OBSIDIAN_TEAR` | — | Obsidian tear dripping from a block. |
| `dripping_water` | `DRIPPING_WATER` | — | Water drop dripping from a block. |
| `dust` | `DUST` | Particle.DustOptions | Colored dust; requires a DustOptions (color + size). |
| `dust_color_transition` | `DUST_COLOR_TRANSITION` | Particle.DustTransition | Dust that transitions between two colors; requires a DustTransition. |
| `dust_pillar` | `DUST_PILLAR` | BlockData | Dust column kicked up by a brush; requires a BlockData. |
| `dust_plume` | `DUST_PLUME` | — | Dust plume kicked up when brushing. |
| `effect` | `EFFECT` | Particle.Spell | Magic spell particle, colored via Particle.Spell data. |
| `egg_crack` | `EGG_CRACK` | — | Cracks appearing on hatching eggs. |
| `elder_guardian` | `ELDER_GUARDIAN` | — | Curse effect from an Elder Guardian. |
| `electric_spark` | `ELECTRIC_SPARK` | — | Electric spark from a lightning rod. |
| `enchant` | `ENCHANT` | — | Glowing glyphs rising from an enchanting table. |
| `enchanted_hit` | `ENCHANTED_HIT` | — | Purple sparkle from a magic (enchanted) critical hit. |
| `end_rod` | `END_ROD` | — | Sparkle beam from an End Rod. |
| `entity_effect` | `ENTITY_EFFECT` | Color | Colored particle for entity effects (e.g. splash potions); requires a Color. |
| `explosion` | `EXPLOSION` | — | Large explosion flash. |
| `explosion_emitter` | `EXPLOSION_EMITTER` | — | Emitter for the large explosion effect. |
| `falling_dripstone_lava` | `FALLING_DRIPSTONE_LAVA` | — | Lava falling from a dripstone. |
| `falling_dripstone_water` | `FALLING_DRIPSTONE_WATER` | — | Water falling from a dripstone. |
| `falling_dust` | `FALLING_DUST` | BlockData | Falling block dust; requires a BlockData. |
| `falling_honey` | `FALLING_HONEY` | — | Honey drop falling from a block. |
| `falling_lava` | `FALLING_LAVA` | — | Lava drop falling from a block. |
| `falling_nectar` | `FALLING_NECTAR` | — | Nectar drop falling from dripping azalea. |
| `falling_obsidian_tear` | `FALLING_OBSIDIAN_TEAR` | — | Obsidian tear falling from a block. |
| `falling_spore_blossom` | `FALLING_SPORE_BLOSSOM` | — | Spores falling from a spore blossom. |
| `falling_water` | `FALLING_WATER` | — | Water drop falling from a block. |
| `firefly` | `FIREFLY` | — | Glowing firefly particle. |
| `firework` | `FIREWORK` | — | Sparkle trail left by firework rockets. |
| `fishing` | `FISHING` | — | Water splash made by a fishing hook. |
| `flame` | `FLAME` | — | Small flame particle. |
| `flash` | `FLASH` | Color | Bright flash; requires a Color. |
| `glow` | `GLOW` | — | Glowing dots left by a glow squid. |
| `glow_squid_ink` | `GLOW_SQUID_INK` | — | Glowing ink cloud from a glow squid. |
| `gust` | `GUST` | — | Wind gust from the Breeze. |
| `gust_emitter_large` | `GUST_EMITTER_LARGE` | — | Emitter for large wind gusts. |
| `gust_emitter_small` | `GUST_EMITTER_SMALL` | — | Emitter for small wind gusts. |
| `happy_villager` | `HAPPY_VILLAGER` | — | Green sparkle above a trading villager. |
| `heart` | `HEART` | — | Heart from breeding / love mode. |
| `infested` | `INFESTED` | — | Particles from infested (silverfish) blocks. |
| `instant_effect` | `INSTANT_EFFECT` | Particle.Spell | Instant-effect spell particles (like Instant Health). |
| `item` | `ITEM` | ItemStack | Breaking item particle; requires an ItemStack. |
| `item_cobweb` | `ITEM_COBWEB` | — | Particles when a cobweb breaks. |
| `item_slime` | `ITEM_SLIME` | — | Breaking slimeball particle. |
| `item_snowball` | `ITEM_SNOWBALL` | — | Breaking snowball particle. |
| `landing_honey` | `LANDING_HONEY` | — | Splash when a falling honey drop lands. |
| `landing_lava` | `LANDING_LAVA` | — | Splash when a falling lava drop lands. |
| `landing_obsidian_tear` | `LANDING_OBSIDIAN_TEAR` | — | Splash when an obsidian tear lands. |
| `large_smoke` | `LARGE_SMOKE` | — | Large, slower-spreading smoke cloud. |
| `lava` | `LAVA` | — | Spark popping out of lava. |
| `mycelium` | `MYCELIUM` | — | Tiny spores drifting from mycelium. |
| `nautilus` | `NAUTILUS` | — | Sparkle from a nautilus shell. |
| `note` | `NOTE` | — | Musical note, as from a noteblock. |
| `ominous_spawning` | `OMINOUS_SPAWNING` | — | Particles from an ominous trial spawner spawning. |
| `pale_oak_leaves` | `PALE_OAK_LEAVES` | — | Leaves falling from pale oak trees. |
| `poof` | `POOF` | — | Small puff of smoke, as from a small explosion. |
| `portal` | `PORTAL` | — | Purple swirling portal particles. |
| `raid_omen` | `RAID_OMEN` | — | Effect when a player has Raid Omen. |
| `rain` | `RAIN` | — | Rain splash on the ground. |
| `reverse_portal` | `REVERSE_PORTAL` | — | Purple swirl of a returning (reverse) portal. |
| `scrape` | `SCRAPE` | — | Particles when scraping oxidation off copper. |
| `sculk_charge` | `SCULK_CHARGE` | Float | Energy wave spreading from sculk; requires a Float (angle). |
| `sculk_charge_pop` | `SCULK_CHARGE_POP` | — | Burst when a sculk charge reaches its target. |
| `sculk_soul` | `SCULK_SOUL` | — | Blue soul flame from sculk. |
| `shriek` | `SHRIEK` | Integer | Shriek from a sculk shrieker; requires an Integer (delay in ticks). |
| `small_flame` | `SMALL_FLAME` | — | Small flame (e.g. from a candle). |
| `small_gust` | `SMALL_GUST` | — | Small wind gust. |
| `smoke` | `SMOKE` | — | Small puff of smoke. |
| `sneeze` | `SNEEZE` | — | Cloud from a panda sneezing. |
| `snowflake` | `SNOWFLAKE` | — | Falling snowflake. |
| `sonic_boom` | `SONIC_BOOM` | — | Ring from the Warden's sonic boom. |
| `soul` | `SOUL` | — | Floating soul particle. |
| `soul_fire_flame` | `SOUL_FIRE_FLAME` | — | Blue flame of soul fire. |
| `spit` | `SPIT` | — | Llama spit. |
| `splash` | `SPLASH` | — | Water droplets splashing up. |
| `spore_blossom_air` | `SPORE_BLOSSOM_AIR` | — | Spores drifting in the air around a spore blossom. |
| `squid_ink` | `SQUID_INK` | — | Ink cloud from a squid. |
| `sweep_attack` | `SWEEP_ATTACK` | — | Arc from a sword sweep attack. |
| `tinted_leaves` | `TINTED_LEAVES` | Color | Falling leaves tinted with a Color. |
| `totem_of_undying` | `TOTEM_OF_UNDYING` | — | Green ring when a Totem of Undying activates. |
| `trail` | `TRAIL` | Particle.Trail | Colored trail toward a target; requires a Trail. |
| `trial_omen` | `TRIAL_OMEN` | — | Effect when a player has Trial Omen. |
| `trial_spawner_detection` | `TRIAL_SPAWNER_DETECTION` | — | Detection pulse from a trial spawner. |
| `trial_spawner_detection_ominous` | `TRIAL_SPAWNER_DETECTION_OMINOUS` | — | Detection pulse from an ominous trial spawner. |
| `underwater` | `UNDERWATER` | — | Tiny ambient bubbles underwater. |
| `vault_connection` | `VAULT_CONNECTION` | — | Beam connecting a Vault key to the Vault. |
| `vibration` | `VIBRATION` | Vibration | Vibration wave traveling to a target; requires a Vibration. |
| `warped_spore` | `WARPED_SPORE` | — | Spores drifting in warped forests. |
| `wax_off` | `WAX_OFF` | — | Sparkle when removing wax from copper. |
| `wax_on` | `WAX_ON` | — | Sparkle when applying wax to copper. |
| `white_ash` | `WHITE_ASH` | — | White ash falling in soul sand valleys. |
| `white_smoke` | `WHITE_SMOKE` | — | White smoke column (e.g. from a campfire). |
| `witch` | `WITCH` | — | Green sparkle from a witch's magic. |

## Usage Examples

### Without data

```yaml
- id: spawn_particle
  args:
    particle: flame # Simple particle - no additional data required
    amount: 10 # The amount of particles to spawn
  ...other config (eg triggers, filters, mutators, etc)
```

### With data

Particles such as `dust` require a data object (here `Particle.DustOptions`, defining the color and size) to be passed when spawned through the API:

```yaml
- id: spawn_particle
  args:
    particle: dust # Colored dust - requires a DustOptions data object (color + size)
    amount: 10 # The amount of particles to spawn
  ...other config (eg triggers, filters, mutators, etc)
```

## Data Particle Examples

Some particles in the table above require an extra **data object** (the **Data Type** column) when they are spawned through the Bukkit/Paper API. This section shows, for each of the 18 data-carrying particles, what the data means, what you can write in YAML, and how to spawn them with full data from Java.

### How `spawn_particle` handles particle strings

The libreforge `spawn_particle` effect reads a single `particle` argument, which is an **eco particle string**, and spawns it through `Particles.lookup(...)`. The string syntax is:

- **Single token** (no colon, e.g. `flame`, `dust`) — the value is upper-cased and mapped directly to the `org.bukkit.Particle` enum.
- **`name:argument`** (with a colon, e.g. `rgb:ff0000`) — the `name` is matched against registered **particle factories**, which build a data-carrying particle from the argument.
- An unknown value resolves to an **empty particle** (nothing is spawned).

What this means for data particles in a `spawn_particle` config:

- **No-data particles** (e.g. `flame`) work out of the box.
- **`Float`-data particles** (`dragon_breath`, `sculk_charge`) work out of the box — libreforge passes `1f` automatically.
- **Every other data particle** (BlockData, ItemStack, Color, DustOptions, DustTransition, Vibration, Spell, Trail, Integer) is spawned **without its data object**, so the result may be invisible or use a default appearance. For those, either use the **RGB color factory** (only for dust-like particles, see below) or spawn them directly through the **Bukkit/Paper API** (Java examples in this section).
- **Advanced**: you can register a custom `ParticleFactory` (implement `getNames()` and `create(String key)`) to extend the eco particle string with your own named data-carrying particles.

The Java snippets below assume `world` is a `World` and `location` is a `Location`, e.g. `world.spawnParticle(Particle.X, location, count, offsetX, offsetY, offsetZ, speed, data)`.

### BlockData group — `block`, `falling_dust`, `dust_pillar`, `block_crumble`, `block_marker`

`BlockData` (`org.bukkit.block.data.BlockData`) describes a **block state** — the material plus optional state properties. Obtain one with `Bukkit.createBlockData(Material.X)`.

#### `block` — `BLOCK` · BlockData

Breaking-block particles; the data selects which block material breaks.

```yaml
- id: spawn_particle
  args:
    particle: block
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ In `spawn_particle` this particle is spawned without its `BlockData` and may not render. Use the Bukkit API to supply the block state:

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.STONE);
world.spawnParticle(Particle.BLOCK, location, 10, 0.5, 0.5, 0.5, 0, data);
```

#### `falling_dust` — `FALLING_DUST` · BlockData

Falling block dust; the data selects the falling block material.

```yaml
- id: spawn_particle
  args:
    particle: falling_dust
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `BlockData` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.SAND);
world.spawnParticle(Particle.FALLING_DUST, location, 10, 0, 0, 0, 0, data);
```

#### `dust_pillar` — `DUST_PILLAR` · BlockData

Dust column kicked up when brushing; the data selects the brushed block material.

```yaml
- id: spawn_particle
  args:
    particle: dust_pillar
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `BlockData` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.DIRT);
world.spawnParticle(Particle.DUST_PILLAR, location, 10, 0.2, 0.2, 0.2, 0, data);
```

#### `block_crumble` — `BLOCK_CRUMBLE` · BlockData

Crumbling block pieces; the data selects the crumbling block material.

```yaml
- id: spawn_particle
  args:
    particle: block_crumble
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `BlockData` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.SANDSTONE);
world.spawnParticle(Particle.BLOCK_CRUMBLE, location, 10, 0.3, 0.3, 0.3, 0, data);
```

#### `block_marker` — `BLOCK_MARKER` · BlockData

Block outline marker; the data selects the block material whose outline is shown.

```yaml
- id: spawn_particle
  args:
    particle: block_marker
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `BlockData` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.STONE);
world.spawnParticle(Particle.BLOCK_MARKER, location, 10, 0, 0, 0, 0, data);
```

### Color group — `entity_effect`, `flash`, `tinted_leaves`

`Color` (`org.bukkit.Color`) is an ARGB/RGB color. Use the constants (`Color.RED`, `Color.BLUE`, …) or `Color.fromRGB(0xRRGGBB)`.

#### `entity_effect` — `ENTITY_EFFECT` · Color

Colored particle used for entity effects (e.g. splash potions); the data is the particle color.

```yaml
- id: spawn_particle
  args:
    particle: entity_effect
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `Color` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Color;
import org.bukkit.Particle;

world.spawnParticle(Particle.ENTITY_EFFECT, location, 1, 0, 0, 0, 0, Color.RED);
```

#### `flash` — `FLASH` · Color

Bright flash; the data is the flash color.

```yaml
- id: spawn_particle
  args:
    particle: flash
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `Color` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Color;
import org.bukkit.Particle;

world.spawnParticle(Particle.FLASH, location, 1, 0, 0, 0, 0, Color.WHITE);
```

#### `tinted_leaves` — `TINTED_LEAVES` · Color

Falling leaves tinted with a color; the data is the tint color.

```yaml
- id: spawn_particle
  args:
    particle: tinted_leaves
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `Color` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Color;
import org.bukkit.Particle;

world.spawnParticle(Particle.TINTED_LEAVES, location, 10, 0.5, 0.5, 0.5, 0, Color.fromRGB(0x00ff00));
```

### Float group — `dragon_breath`, `sculk_charge` ✅

A `Float` value acts as speed/spread or angle. These two particles are the only data particles that **work directly** in `spawn_particle`: libreforge passes `1f` automatically.

#### `dragon_breath` — `DRAGON_BREATH` · Float

Dragon's breath; the data controls the spread.

```yaml
- id: spawn_particle
  args:
    particle: dragon_breath # Float data - libreforge passes 1f automatically
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

Use the Bukkit API to control the value precisely:

```java
import org.bukkit.Particle;

world.spawnParticle(Particle.DRAGON_BREATH, location, 10, 0.5, 0.5, 0.5, 0, 1f);
```

#### `sculk_charge` — `SCULK_CHARGE` · Float

Energy wave spreading from sculk; the data is the angle in degrees.

```yaml
- id: spawn_particle
  args:
    particle: sculk_charge # Float data - libreforge passes 1f automatically
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

Use the Bukkit API to control the angle precisely:

```java
import org.bukkit.Particle;

world.spawnParticle(Particle.SCULK_CHARGE, location, 1, 0, 0, 0, 0, 0f); // angle in degrees
```

### Integer group — `shriek`

An `Integer` data value holds a plain integer (here: the delay in ticks).

#### `shriek` — `SHRIEK` · Integer

Shriek from a sculk shrieker; the data is the delay in ticks before the shriek appears.

```yaml
- id: spawn_particle
  args:
    particle: shriek
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ In `spawn_particle` the delay is always `0` (immediate). Use the Bukkit API to set a custom delay:

```java
import org.bukkit.Particle;

world.spawnParticle(Particle.SHRIEK, location, 1, 0, 0, 0, 0, 20); // 20 ticks delay
```

### ItemStack group — `item`

`ItemStack` (`org.bukkit.inventory.ItemStack`) describes the item that is breaking.

#### `item` — `ITEM` · ItemStack

Breaking item particles; the data selects which item breaks.

```yaml
- id: spawn_particle
  args:
    particle: item
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `ItemStack` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.inventory.ItemStack;

ItemStack data = new ItemStack(Material.DIAMOND);
world.spawnParticle(Particle.ITEM, location, 10, 0.5, 0.5, 0.5, 0, data);
```

### Dust group — `dust`, `dust_color_transition`

`Particle.DustOptions` (color + size) and `Particle.DustTransition` (start color, end color, size) describe colored dust.

#### `dust` — `DUST` · Particle.DustOptions

Colored dust; the data is the color and size. In YAML, prefer the **RGB color factory** (below) which produces a `DUST` with the requested color:

```yaml
- id: spawn_particle
  args:
    particle: rgb:ff0000 # equivalent to colored dust (size 1.0)
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

Use the Bukkit API for full control over color and size:

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.DustOptions data = new Particle.DustOptions(Color.RED, 1.0f);
world.spawnParticle(Particle.DUST, location, 10, 0, 0, 0, 0, data);
```

#### `dust_color_transition` — `DUST_COLOR_TRANSITION` · Particle.DustTransition

Dust that transitions between two colors; the data is start color, end color and size.

```yaml
- id: spawn_particle
  args:
    particle: dust_color_transition
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `DustTransition` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.DustTransition data = new Particle.DustTransition(Color.RED, Color.BLUE, 1.0f);
world.spawnParticle(Particle.DUST_COLOR_TRANSITION, location, 10, 0, 0, 0, 0, data);
```

### Spell group — `effect`, `instant_effect`

`Particle.Spell` (color + power) colors magic spell particles.

#### `effect` — `EFFECT` · Particle.Spell

Magic spell particle; the data is the color and power.

```yaml
- id: spawn_particle
  args:
    particle: effect
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `Particle.Spell` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.Spell data = new Particle.Spell(Color.PURPLE, 1.0f);
world.spawnParticle(Particle.EFFECT, location, 1, 0, 0, 0, 0, data);
```

#### `instant_effect` — `INSTANT_EFFECT` · Particle.Spell

Instant-effect spell particles (like Instant Health); the data is the color and power.

```yaml
- id: spawn_particle
  args:
    particle: instant_effect
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `Particle.Spell` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.Spell data = new Particle.Spell(Color.WHITE, 1.0f);
world.spawnParticle(Particle.INSTANT_EFFECT, location, 1, 0, 0, 0, 0, data);
```

### Trail group — `trail`

`Particle.Trail` (target location, color, duration) describes a colored trail flying toward a target.

#### `trail` — `TRAIL` · Particle.Trail

Colored trail toward a target; the data is the target location, the color and the duration in ticks.

```yaml
- id: spawn_particle
  args:
    particle: trail
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `Particle.Trail` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.Trail data = new Particle.Trail(targetLocation, Color.RED, 20); // target, color, duration (ticks)
world.spawnParticle(Particle.TRAIL, location, 1, 0, 0, 0, 0, data);
```

### Vibration group — `vibration`

`Vibration` (`org.bukkit.Vibration`) describes a vibration wave: origin, destination and arrival time. Note that `Vibration` is a standalone class, not a `Particle` nested class.

#### `vibration` — `VIBRATION` · Vibration

Vibration wave traveling to a target; the data is the origin, the destination and the arrival time in ticks.

```yaml
- id: spawn_particle
  args:
    particle: vibration
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ Not spawned with its `Vibration` in `spawn_particle`. Use the Bukkit API:

```java
import org.bukkit.Location;
import org.bukkit.Particle;
import org.bukkit.Vibration;

Location origin = location;
Location destination = location.clone().add(5, 0, 0);
Vibration data = new Vibration(origin, new Vibration.Destination.BlockDestination(destination.getBlock()), 20);
world.spawnParticle(Particle.VIBRATION, location, 1, 0, 0, 0, 0, data);
```

### RGB color factory

The built-in `ParticleFactoryRGB` registers the aliases `rgb`, `color` and `hex`. The syntax `name:<hex>` parses the argument as a 6-digit hexadecimal color and spawns a `DUST` particle with that color at size `1.0f`. So `rgb:00ff00`, `color:ff0000` and `hex:00aaff` are all valid in YAML and are equivalent to spawning colored `dust`:

```yaml
- id: spawn_particle
  args:
    particle: rgb:ff0000 # red dust, size 1.0
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

Common colors:

| Color | Hex |
|-------|-----|
| Red | `ff0000` |
| Green | `00ff00` |
| Blue | `0000ff` |
| Yellow | `ffff00` |
| Purple / Magenta | `ff00ff` |
| Cyan | `00ffff` |
| White | `ffffff` |

> The factory only affects dust-like particles (it always spawns `DUST`); it does not supply data to other particle types.

## Related Pages

- [spawn_particle Effect](../effects/spawn_particle)
- [particle_animation Effect](../effects/particle_animation)
- [particle_line Effect](../effects/particle_line)
- [All Effects](../effects/)
