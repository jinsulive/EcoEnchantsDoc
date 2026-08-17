---
title: DamageCause 枚举
titleEn: DamageCause Enum
category: reference
subcategory: enums
tags:
  - libreforge
outline: deep
---

# DamageCause 枚举

> 来源：Paper API · 33 个取值

> 用途：用于伤害原因过滤器（如 `damage_cause`）。

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `KILL` | 击杀 | `/kill` 等直接击杀造成的伤害 |
| `WORLD_BORDER` | 世界边界 | 世界边界收缩造成的伤害 |
| `CONTACT` | 接触 | 与仙人掌等接触造成的伤害 |
| `ENTITY_ATTACK` | 实体攻击 | 被实体近战攻击造成的伤害 |
| `ENTITY_SWEEP_ATTACK` | 横扫攻击 | 剑横扫攻击造成的伤害 |
| `PROJECTILE` | 弹射物 | 被箭矢等弹射物击中的伤害 |
| `SUFFOCATION` | 窒息 | 方块内窒息造成的伤害 |
| `FALL` | 坠落 | 摔落伤害 |
| `FIRE` | 火焰 | 直接接触火焰造成的伤害 |
| `FIRE_TICK` | 火焰灼烧 | 持续燃烧造成的伤害 |
| `MELTING` | 融化 | 融化造成的伤害 |
| `LAVA` | 熔岩 | 熔岩造成的伤害 |
| `DROWNING` | 溺水 | 溺水造成的伤害 |
| `BLOCK_EXPLOSION` | 方块爆炸 | TNT 等方块爆炸造成的伤害 |
| `ENTITY_EXPLOSION` | 实体爆炸 | 苦力怕等实体爆炸造成的伤害 |
| `VOID` | 虚空 | 掉入虚空造成的伤害 |
| `LIGHTNING` | 闪电 | 被闪电击中造成的伤害 |
| `SUICIDE` | 自杀 | 自身原因造成的伤害 |
| `STARVATION` | 饥饿 | 饥饿值耗尽造成的伤害 |
| `POISON` | 中毒 | 中毒效果造成的伤害 |
| `MAGIC` | 魔法 | 魔法伤害（如瞬间伤害药水） |
| `WITHER` | 凋零 | 凋零效果造成的伤害 |
| `FALLING_BLOCK` | 下落方块 | 被下落的方块砸中的伤害 |
| `THORNS` | 荆棘 | 荆棘附魔反弹的伤害 |
| `DRAGON_BREATH` | 龙息 | 末影龙龙息造成的伤害 |
| `FLY_INTO_WALL` | 撞墙 | 高速飞行撞墙造成的伤害（鞘翅） |
| `HOT_FLOOR` | 岩浆块 | 站在岩浆块上受到的伤害 |
| `CAMPFIRE` | 营火 | 营火灼烧造成的伤害 |
| `CRAMMING` | 拥挤 | 实体堆叠过多造成的伤害 |
| `DRYOUT` | 脱水 | 脱离水导致的伤害（如鱼） |
| `FREEZE` | 冰冻 | 细雪等造成的冰冻伤害 |
| `SONIC_BOOM` | 音波 | 监守者音波攻击造成的伤害 |
| `CUSTOM` | 自定义 | 插件自定义的伤害原因 |

[← 返回枚举总览](../enums)
