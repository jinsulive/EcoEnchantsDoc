---
title: Attribute 枚举
titleEn: Attribute Enum
category: reference
subcategory: enums
tags:
  - libreforge
outline: deep
---

# Attribute 枚举

> 来源：Paper API · 35 个取值

> 用途：用于属性修饰（attribute modifier）类参数，如 `add_attribute` 等效果。

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `MAX_HEALTH` | 最大生命值 | 实体的最大生命值上限 |
| `FOLLOW_RANGE` | 跟随范围 | 生物追踪/攻击目标的最大距离 |
| `KNOCKBACK_RESISTANCE` | 击退抗性 | 0–1，越高越不易被击退 |
| `MOVEMENT_SPEED` | 移动速度 | 实体基础移动速度 |
| `FLYING_SPEED` | 飞行速度 | 实体飞行/滑翔速度 |
| `ATTACK_DAMAGE` | 攻击伤害 | 近战攻击的基础伤害 |
| `ATTACK_KNOCKBACK` | 攻击击退 | 近战攻击附加的击退等级 |
| `ATTACK_SPEED` | 攻击速度 | 攻击冷却恢复速率 |
| `ARMOR` | 护甲 | 护甲值（减伤点数） |
| `ARMOR_TOUGHNESS` | 护甲韧性 | 高伤害下护甲减伤效率 |
| `FALL_DAMAGE_MULTIPLIER` | 摔落伤害倍率 | 摔落伤害的乘数 |
| `LUCK` | 幸运 | 影响战利品/钓鱼等随机品质 |
| `MAX_ABSORPTION` | 最大伤害吸收 | 吸收心（金心）上限 |
| `SAFE_FALL_DISTANCE` | 安全坠落距离 | 不受伤的最大坠落高度 |
| `SCALE` | 体型缩放 | 实体视觉大小倍率 |
| `STEP_HEIGHT` | 台阶高度 | 无需跳跃即可迈上的高度 |
| `GRAVITY` | 重力 | 实体受重力影响的程度 |
| `JUMP_STRENGTH` | 跳跃力度 | 跳跃高度/力度 |
| `BURNING_TIME` | 燃烧时间 | 着火持续时间 |
| `CAMERA_DISTANCE` | 相机距离 | 第三人称视角距离 |
| `EXPLOSION_KNOCKBACK_RESISTANCE` | 爆炸击退抗性 | 对爆炸击退的抵抗程度 |
| `MOVEMENT_EFFICIENCY` | 移动效率 | 地形对移动速度的影响程度 |
| `OXYGEN_BONUS` | 氧气加成 | 水下/缺氧时额外氧气时间 |
| `WATER_MOVEMENT_EFFICIENCY` | 水下移动效率 | 水中移动速度影响 |
| `TEMPT_RANGE` | 引诱范围 | 动物被食物引诱的最大距离 |
| `BLOCK_INTERACTION_RANGE` | 方块交互距离 | 可交互方块的最大距离 |
| `ENTITY_INTERACTION_RANGE` | 实体交互距离 | 可交互实体的最大距离 |
| `BLOCK_BREAK_SPEED` | 方块破坏速度 | 徒手破坏方块的速率 |
| `MINING_EFFICIENCY` | 挖掘效率 | 挖掘速度加成 |
| `SNEAKING_SPEED` | 潜行速度 | 潜行时移动速度 |
| `SUBMERGED_MINING_SPEED` | 水下挖掘速度 | 水下挖掘效率影响 |
| `SWEEPING_DAMAGE_RATIO` | 横扫伤害比例 | 横扫攻击的伤害倍率 |
| `SPAWN_REINFORCEMENTS` | 刷怪增援 | 僵尸召唤增援概率 |
| `WAYPOINT_TRANSMIT_RANGE` | 路径点发送范围 | 发送路径点的距离 |
| `WAYPOINT_RECEIVE_RANGE` | 路径点接收范围 | 接收路径点的距离 |

[← 返回枚举总览](../enums)
