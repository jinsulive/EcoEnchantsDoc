---
title: DamageCause Enum
titleZh: DamageCause 枚举
category: reference
subcategory: enums
tags:
  - libreforge
outline: deep
---

# DamageCause Enum

> Source: Paper API · 33 values

> Purpose: Used for damage-cause filters (e.g. `damage_cause`).

| Value | Meaning | Notes |
|-------|---------|-------|
| `KILL` | Kill | Direct kill (e.g. /kill) |
| `WORLD_BORDER` | World border | Damage from a shrinking world border |
| `CONTACT` | Contact | Contact damage (e.g. cactus) |
| `ENTITY_ATTACK` | Entity attack | Melee attack by an entity |
| `ENTITY_SWEEP_ATTACK` | Sweep attack | Sword sweep attack damage |
| `PROJECTILE` | Projectile | Hit by a projectile (e.g. arrow) |
| `SUFFOCATION` | Suffocation | Suffocation inside a block |
| `FALL` | Fall | Fall damage |
| `FIRE` | Fire | Direct fire damage |
| `FIRE_TICK` | Fire tick | Ongoing burn damage |
| `MELTING` | Melting | Damage caused by melting |
| `LAVA` | Lava | Lava damage |
| `DROWNING` | Drowning | Drowning damage |
| `BLOCK_EXPLOSION` | Block explosion | Explosion of a block (e.g. TNT) |
| `ENTITY_EXPLOSION` | Entity explosion | Explosion caused by an entity (e.g. creeper) |
| `VOID` | Void | Falling into the void |
| `LIGHTNING` | Lightning | Struck by lightning |
| `SUICIDE` | Suicide | Self-inflicted damage |
| `STARVATION` | Starvation | Damage from starving |
| `POISON` | Poison | Poison effect damage |
| `MAGIC` | Magic | Magic damage (e.g. harming potion) |
| `WITHER` | Wither | Wither effect damage |
| `FALLING_BLOCK` | Falling block | Hit by a falling block |
| `THORNS` | Thorns | Thorns enchantment reflection |
| `DRAGON_BREATH` | Dragon breath | Ender Dragon breath damage |
| `FLY_INTO_WALL` | Fly into wall | High-speed collision while flying (elytra) |
| `HOT_FLOOR` | Hot floor | Standing on a magma block |
| `CAMPFIRE` | Campfire | Campfire burn damage |
| `CRAMMING` | Cramming | Too many entities in one block |
| `DRYOUT` | Dryout | Out-of-water damage (e.g. fish) |
| `FREEZE` | Freeze | Freezing damage (e.g. powder snow) |
| `SONIC_BOOM` | Sonic boom | Warden sonic attack |
| `CUSTOM` | Custom | Custom damage cause defined by plugins |

[← Back to Enum Overview](../enums)
