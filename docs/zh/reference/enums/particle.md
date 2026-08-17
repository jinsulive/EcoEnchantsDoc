---
title: Particle 枚举
titleEn: Particle Enum
category: reference
subcategory: enums
tags:
  - libreforge
outline: deep
---

# Particle 枚举

> 来源：Paper API · 115 个取值

> 用途：用于粒子参数（如 `spawn_particle`、`particle_line`）。

> 通用（26 个）— 基础通用粒子

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `POOF` | 烟雾爆炸 | — |
| `EXPLOSION` | 爆炸 | — |
| `EXPLOSION_EMITTER` | 爆炸发射器 | — |
| `FIREWORK` | 烟花 | — |
| `BUBBLE` | 气泡 | — |
| `SPLASH` | 水花 | — |
| `FISHING` | 钓鱼 | — |
| `UNDERWATER` | 水下 | — |
| `CRIT` | 暴击 | — |
| `ENCHANTED_HIT` | 附魔暴击 | — |
| `SMOKE` | 烟雾 | — |
| `LARGE_SMOKE` | 大烟雾 | — |
| `EFFECT` | 效果 | — |
| `INSTANT_EFFECT` | 瞬时效果 | — |
| `ENTITY_EFFECT` | 实体效果 | — |
| `WITCH` | 女巫 | — |
| `FLAME` | 火焰 | — |
| `LAVA` | 岩浆 | — |
| `CLOUD` | 云 | — |
| `HEART` | 爱心 | — |
| `NOTE` | 音符 | — |
| `PORTAL` | 传送门 | — |
| `ENCHANT` | 附魔 | — |
| `RAIN` | 雨滴 | — |
| `SNOWFLAKE` | 雪花 | — |
| `MYCELIUM` | 菌丝 | — |


> 方块/物品（15 个）— 方块与物品相关粒子

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `ITEM` | 物品 | — |
| `BLOCK` | 方块 | — |
| `FALLING_DUST` | 下落灰尘 | — |
| `ITEM_SNOWBALL` | 雪球粒子 | — |
| `ITEM_SLIME` | 史莱姆粒子 | — |
| `DUST` | 灰尘 | — |
| `DUST_COLOR_TRANSITION` | 颜色渐变灰尘 | — |
| `VIBRATION` | 振动 | — |
| `SONIC_BOOM` | 音爆 | — |
| `ITEM_COBWEB` | 蜘蛛网粒子 | — |
| `DUST_PILLAR` | 灰尘柱 | — |
| `BLOCK_CRUMBLE` | 方块崩解 | — |
| `BLOCK_MARKER` | 方块标记 | — |
| `EGG_CRACK` | 蛋壳碎裂 | — |
| `DUST_PLUME` | 灰尘柱 | — |


> 环境/装饰（24 个）— 环境与装饰性粒子

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `CHERRY_LEAVES` | 樱花花瓣 | — |
| `PALE_OAK_LEAVES` | 苍白橡树叶 | — |
| `TINTED_LEAVES` | 染色树叶 | — |
| `FIREFLY` | 萤火虫 | — |
| `GLOW` | 发光 | — |
| `WAX_ON` | 上蜡 | — |
| `WAX_OFF` | 去蜡 | — |
| `ELECTRIC_SPARK` | 电火花 | — |
| `SCRAPE` | 刮拭 | — |
| `WHITE_SMOKE` | 白色烟雾 | — |
| `CAMPFIRE_COSY_SMOKE` | 营火轻烟 | — |
| `CAMPFIRE_SIGNAL_SMOKE` | 营火信号烟 | — |
| `COMPOSTER` | 堆肥桶 | — |
| `FLASH` | 闪光 | — |
| `TOTEM_OF_UNDYING` | 不死图腾 | — |
| `DAMAGE_INDICATOR` | 伤害指示 | — |
| `SWEEP_ATTACK` | 横扫攻击 | — |
| `END_ROD` | 末地烛 | — |
| `SMALL_FLAME` | 小火苗 | — |
| `GUST` | 阵风 | — |
| `SMALL_GUST` | 小阵风 | — |
| `GUST_EMITTER_LARGE` | 大阵风发射器 | — |
| `GUST_EMITTER_SMALL` | 小阵风发射器 | — |
| `TRAIL` | 轨迹 | — |


> 实体（13 个）— 与实体行为相关的粒子

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `ANGRY_VILLAGER` | 愤怒村民 | — |
| `HAPPY_VILLAGER` | 开心村民 | — |
| `ELDER_GUARDIAN` | 远古守卫者 | — |
| `DRAGON_BREATH` | 龙息 | — |
| `SPIT` | 唾液 | — |
| `SQUID_INK` | 鱿鱼墨汁 | — |
| `GLOW_SQUID_INK` | 荧光鱿鱼墨汁 | — |
| `SNEEZE` | 喷嚏 | — |
| `DOLPHIN` | 海豚 | — |
| `NAUTILUS` | 鹦鹉螺 | — |
| `BUBBLE_POP` | 气泡破裂 | — |
| `CURRENT_DOWN` | 向下水流 | — |
| `BUBBLE_COLUMN_UP` | 气泡柱上升 | — |


> 液体/滴落（18 个）— 液体滴落与下落粒子

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `DRIPPING_WATER` | 滴水 | — |
| `DRIPPING_LAVA` | 滴岩浆 | — |
| `FALLING_LAVA` | 下落岩浆 | — |
| `LANDING_LAVA` | 落地岩浆 | — |
| `FALLING_WATER` | 下落水流 | — |
| `DRIPPING_HONEY` | 滴蜂蜜 | — |
| `FALLING_HONEY` | 下落蜂蜜 | — |
| `LANDING_HONEY` | 落地蜂蜜 | — |
| `FALLING_NECTAR` | 下落花蜜 | — |
| `DRIPPING_OBSIDIAN_TEAR` | 滴泪 | — |
| `FALLING_OBSIDIAN_TEAR` | 下落泪滴 | — |
| `LANDING_OBSIDIAN_TEAR` | 落地泪滴 | — |
| `DRIPPING_DRIPSTONE_LAVA` | 滴水石滴岩浆 | — |
| `FALLING_DRIPSTONE_LAVA` | 滴水石落岩浆 | — |
| `DRIPPING_DRIPSTONE_WATER` | 滴水石滴水 | — |
| `FALLING_DRIPSTONE_WATER` | 滴水石落水 | — |
| `FALLING_SPORE_BLOSSOM` | 下落孢子花 | — |
| `SPORE_BLOSSOM_AIR` | 孢子花空气 | — |


> 下界/幽匿（12 个）— 下界与幽匿类粒子

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `SOUL_FIRE_FLAME` | 灵魂火 | — |
| `SOUL` | 灵魂 | — |
| `ASH` | 灰烬 | — |
| `WHITE_ASH` | 白灰 | — |
| `CRIMSON_SPORE` | 绯红孢子 | — |
| `WARPED_SPORE` | 诡异孢子 | — |
| `REVERSE_PORTAL` | 反向传送门 | — |
| `SCULK_SOUL` | 幽匿灵魂 | — |
| `SCULK_CHARGE` | 幽匿充能 | — |
| `SCULK_CHARGE_POP` | 幽匿充能爆发 | — |
| `SHRIEK` | 尖啸 | — |
| `COPPER_FIRE_FLAME` | 铜火苗 | — |


> 试炼/事件（7 个）— 试炼密室与事件相关粒子

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `TRIAL_SPAWNER_DETECTION` | 试炼刷怪笼探测 | — |
| `TRIAL_SPAWNER_DETECTION_OMINOUS` | 试炼刷怪笼不祥探测 | — |
| `VAULT_CONNECTION` | 宝库连接 | — |
| `INFESTED` | 寄生 | — |
| `OMINOUS_SPAWNING` | 不祥生成 | — |
| `RAID_OMEN` | 袭击之兆 | — |
| `TRIAL_OMEN` | 试炼之兆 | — |


[← 返回枚举总览](../enums)
