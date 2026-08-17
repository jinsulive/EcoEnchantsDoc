---
title: Enum Quick Reference
titleZh: 枚举值速查表
category: reference
tags:
  - libreforge
outline: deep
---

# Enum Quick Reference

> The values below are the **actual YAML values** that take effect in configuration. `blocks`/`items`/`entities` list parameters may use any member of the corresponding enum; Bukkit enums are case-insensitive. `Material` excludes `LEGACY_` prefixed values.

> 枚举值为 **YAML 中实际配置生效的取值**。`blocks`/`items`/`entities` 等列表参数可填下列枚举的任意成员；Bukkit 枚举按常量名书写（大小写不敏感，`damage_cause`/`sheep_color` 等内部均忽略大小写）。`Material` 已排除 `LEGACY_` 前缀值（这些值无法匹配现代方块）。

## Enum Types

> Click an enum type to view its complete value table. Values below are the **actual YAML values** that take effect in configuration.

| Enum Type | Purpose | Values |
|---|---|---|
| [Attribute](./enums/attribute) | Used for attribute-modifier parameters (e.g. `add_attribute`). | 35 |
| [Axis](./enums/axis) | Used for axis/direction parameters (e.g. block face offset). | 3 |
| [BarColor](./enums/bar_color) | Used for boss-bar color parameters (e.g. `color` in `create_boss_bar`). | 7 |
| [BarStyle](./enums/bar_style) | Used for boss-bar style parameters (e.g. `style` in `create_boss_bar`). | 5 |
| [Biome](./enums/biome) | Used for biome conditions/filters (e.g. `in_biome`). | 66 |
| [BlockFace](./enums/block_face) | Used for directional/offset parameters (e.g. `offset` in `aoe`). | 19 |
| [DamageCause](./enums/damage_cause) | Used for damage-cause filters (e.g. `damage_cause`). | 33 |
| [DyeColor](./enums/dye_color) | Used for color parameters (e.g. `sheep_color` filter). | 16 |
| [EntityCategory](./enums/entity_category) | Used for entity-category filters (e.g. `entity_category`). | 5 |
| [EntityType](./enums/entity_type) | Used for entity parameters and filters (e.g. `entities`, `spawn_entity`). | 158 |
| [EquipmentSlot](./enums/equipment_slot) | Used for equipment-slot parameters (e.g. `slot` in `damage_armor`). | 8 |
| [GameMode](./enums/gamemode) | Used for gamemode conditions (e.g. `in_gamemode`). | 4 |
| [InventoryType](./enums/inventory_type) | Used for inventory-type parameters (e.g. container type checks). | 32 |
| [ItemFlag](./enums/item_flag) | Used for item-flag parameters (e.g. `item_flags`). | 9 |
| [ItemRarity](./enums/item_rarity) | Used for item-rarity parameters (e.g. `item_rarity`). | 4 |
| [Material](./enums/material) | Used for block/item parameters (e.g. `blocks`, `set_block`, `replace_near`). | 1658 |
| [Particle](./enums/particle) | Used for particle parameters (e.g. `spawn_particle`, `particle_line`). | 115 |
| [RegainReason](./enums/regain_reason) | Used for health-regain reason filters (e.g. `regain_reason`). | 9 |
| [Sound](./enums/sound) | Used for sound parameters (e.g. `play_sound`). Supports vanilla and resource-pack sounds. | 1838 |
| [FireworkEffect.Type](./enums/firework_type) | Used for firework shape parameters (e.g. `firework`). | 5 |
| [WeatherType](./enums/weather_type) | Used for weather parameters (e.g. `set_player_weather`). | 2 |
| [RunOrder](./enums/run_order) | Used for effect-chain run order (e.g. `run_order`). | 5 |
| [BossBar.Color](./enums/boss_bar_color) | Used for boss-bar color parameters (Adventure library). | 7 |
| [BossBar.Overlay](./enums/boss_bar_overlay) | Used for boss-bar overlay parameters (Adventure library). | 5 |
| [Enchantment](./enums/enchantment) | Used for enchantment parameters and filters (e.g. `enchant`, `add_enchant`, `remove_enchant`). | 43 |
| [PotionEffectType](./enums/potion_effect_type) | Used for potion-effect parameters and filters (e.g. `potion_effect`, `has_potion_effect`). | 39 |
| [Skills](./enums/skills) | AuraSkills skill names for skill XP multiplier parameters (e.g. `skill_xp_multiplier`). | 23 |

