---
title: damage_nearby_entities
titleEn: damage_nearby_entities
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_nearby_entities <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 伤害指定位置附近的实体。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_nearby_entities` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `damage` | Expression(数学表达式) | ✅ | — | — | 对每个实体造成的伤害值。支持表达式。示例：`%level% * 2` |
| `radius` | Expression(数学表达式) | ✅ | — | — | 实体伤害半径。支持表达式。示例：`5 + %level% * 0.5` |
| `entities` | Entity List | — | — | — | 允许被伤害的实体白名单。指定后仅这些实体类型会受损。 |
| `damage_as_player` | Boolean | ✅ | — | — | 是否将玩家标记为伤害来源。 |
| `damage_self` | Boolean | — | `true` | — | 该效果是否可以对玩家自身造成伤害。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageNearbyEntities.kt`）。

- **源码描述**: 对半径内的所有附近实体造成伤害。
- **所属分类**: `combat`
- **需要触发器数据**: `LOCATION`, `PLAYER`

## 配置示例

```yaml
- id: damage_nearby_entities
  args:
    damage: 2 # The amount of damage to deal
    radius: 5 # The radius to scan for entities
    entities: # The whitelist of entities to damage
      - spider
      - cave_spider
    damage_as_player: false # If the player should be marked as the damager
    damage_self: false # If the effect can damage the player
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
