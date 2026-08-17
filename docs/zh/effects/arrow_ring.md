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

> 在指定位置周围生成一圈箭矢。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `arrow_ring` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | The number of arrows in the ring. Supports expressions. 例: `8 + %level%` |
| `height` | Expression | ✅ | — | — | The height above the location to spawn the arrows. Supports expressions. |
| `radius` | Expression | ✅ | — | — | The radius of the arrow ring. Supports expressions. 例: `3 + %level% * 0.3` |
| `arrow_damage` | Expression | ✅ | — | — | The damage each arrow deals. Supports expressions. 例: `%level% * 1.5` |
| `fire_ticks` | Expression | ✅ | — | — | How many ticks the arrows are on fire. Supports expressions. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectArrowRing.kt`）。

- **源码描述**: 在触发位置生成一圈向下坠落的箭。
- **所属分类**: `combat`
- **需要触发器数据**: `LOCATION`

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
