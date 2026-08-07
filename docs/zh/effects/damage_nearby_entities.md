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

> Damage entities near a location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_nearby_entities` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `damage` | The amount of damage to deal |
| `radius` | The radius to scan for entities |
| `entities` | The whitelist of entities to damage |
| `damage_as_player` | If the player should be marked as the damager |
| `damage_self` | If the effect can damage the player |

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
