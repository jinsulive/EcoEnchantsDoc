---
title: harvest_crop
titleEn: harvest_crop
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# harvest_crop <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Harvests a crop block and resets it to age 0

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `harvest_crop` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `only_fully_grown` | Boolean | ✅ | — | — | Whether to only harvest fully grown crops \| Source: Whether the crop must be fully grown before it is harvested. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectHarvestCrop.kt`）。

- **源码描述**: Harvests the triggered crop block and resets its growth to zero.
- **所属分类**: `world`
- **需要触发器数据**: `BLOCK`

## 配置示例

```yaml
- id: harvest_crop
  args:
    only_fully_grown: true # Whether to only harvest fully grown crops
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
