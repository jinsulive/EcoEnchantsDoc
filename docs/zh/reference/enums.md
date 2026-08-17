---
title: 枚举值速查表
titleEn: Enum Quick Reference
category: reference
tags:
  - libreforge
outline: deep
---

# 枚举值速查表

> 以下为 **YAML 中实际配置生效的取值**。`blocks`/`items`/`entities` 等列表参数可填下列枚举的任意成员；Bukkit 枚举按常量名书写（大小写不敏感）。`Material` 已排除 `LEGACY_` 前缀值。

> 枚举值为 **YAML 中实际配置生效的取值**。`blocks`/`items`/`entities` 等列表参数可填下列枚举的任意成员；Bukkit 枚举按常量名书写（大小写不敏感，`damage_cause`/`sheep_color` 等内部均忽略大小写）。`Material` 已排除 `LEGACY_` 前缀值（这些值无法匹配现代方块）。

## 枚举类型

> 点击下方枚举类型可查看完整的取值表格。下列取值为 **YAML 中实际配置生效的取值**。

| 枚举类型 | 用途 | 取值数 |
|---|---|---|
| [Attribute](./enums/attribute) | 用于属性修饰（attribute modifier）类参数，如 `add_attribute` 等效果。 | 35 |
| [Axis](./enums/axis) | 用于坐标轴/方向类参数（如方块朝向偏移）。 | 3 |
| [BarColor](./enums/bar_color) | 用于 Boss 血条颜色参数（如 `create_boss_bar` 的 `color`）。 | 7 |
| [BarStyle](./enums/bar_style) | 用于 Boss 血条样式参数（如 `create_boss_bar` 的 `style`）。 | 5 |
| [Biome](./enums/biome) | 用于生物群系条件/过滤器（如 `in_biome`）。 | 66 |
| [BlockFace](./enums/block_face) | 用于方向/偏移类参数（如 `aoe` 的 `offset`）。 | 19 |
| [DamageCause](./enums/damage_cause) | 用于伤害原因过滤器（如 `damage_cause`）。 | 33 |
| [DyeColor](./enums/dye_color) | 用于颜色类参数（如 `sheep_color` 过滤器）。 | 16 |
| [EntityCategory](./enums/entity_category) | 用于实体类别过滤器（如 `entity_category`）。 | 5 |
| [EntityType](./enums/entity_type) | 用于实体参数与过滤器（如 `entities`、`spawn_entity`）。 | 158 |
| [EquipmentSlot](./enums/equipment_slot) | 用于装备槽位参数（如 `damage_armor` 的 `slot`）。 | 8 |
| [GameMode](./enums/gamemode) | 用于游戏模式条件（如 `in_gamemode`）。 | 4 |
| [InventoryType](./enums/inventory_type) | 用于背包/容器类型参数（如容器类型判断）。 | 32 |
| [ItemFlag](./enums/item_flag) | 用于物品标志参数（如 `item_flags`）。 | 9 |
| [ItemRarity](./enums/item_rarity) | 用于物品稀有度参数（如 `item_rarity`）。 | 4 |
| [Material](./enums/material) | 用于方块/物品参数（如 `blocks`、`set_block`、`replace_near`）。 | 1658 |
| [Particle](./enums/particle) | 用于粒子参数（如 `spawn_particle`、`particle_line`）。 | 115 |
| [RegainReason](./enums/regain_reason) | 用于生命恢复原因过滤器（如 `regain_reason`）。 | 9 |
| [Sound](./enums/sound) | 用于声音参数（如 `play_sound`），支持原版与资源包声音。 | 1838 |
| [FireworkEffect.Type](./enums/firework_type) | 用于烟花形状参数（如 `firework`）。 | 5 |
| [WeatherType](./enums/weather_type) | 用于天气参数（如 `set_player_weather`）。 | 2 |
| [RunOrder](./enums/run_order) | 用于效果链执行顺序（如 `run_order`）。 | 5 |
| [BossBar.Color](./enums/boss_bar_color) | 用于 Boss 血条颜色参数（Adventure 库）。 | 7 |
| [BossBar.Overlay](./enums/boss_bar_overlay) | 用于 Boss 血条覆盖样式参数（Adventure 库）。 | 5 |
| [Enchantment](./enums/enchantment) | 用于附魔参数与过滤器（如 `enchant`、`add_enchant`、`remove_enchant`）。 | 43 |
| [PotionEffectType](./enums/potion_effect_type) | 用于药水效果参数与过滤器（如 `potion_effect`、`has_potion_effect`）。 | 39 |
| [Skills](./enums/skills) | AuraSkills 技能名，用于技能经验倍率参数（如 `skill_xp_multiplier`）。 | 23 |

