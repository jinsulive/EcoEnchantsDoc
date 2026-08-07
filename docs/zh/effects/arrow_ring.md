---
title: arrow_ring
titleEn: arrow_ring
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# arrow_ring <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Spawns a ring of arrows around a location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `arrow_ring` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of arrows to spawn |
| `height` | The height at which to spawn the arrows |
| `radius` | The radius of the ring |
| `arrow_damage` | The amount of damage for the arrows to deal |
| `fire_ticks` | The fire ticks for the arrows to have |

## 配置示例

```yaml
- id: arrow_ring
  args:
    amount: 12 # The amount of arrows to spawn
    height: 3 # The height at which to spawn the arrows
    radius: 1.5 # The radius of the ring
    arrow_damage: 10 # The amount of damage for the arrows to deal
    fire_ticks: 30 # The fire ticks for the arrows to have
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
