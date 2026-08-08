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

> 收获作物方块并将其生长阶段重置为 0。

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
| `only_fully_grown` | Boolean | ✅ | — | — | 是否只收获完全成熟的作物。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectHarvestCrop.kt`）。

- **源码描述**: 收获触发方块上的作物并将其生长阶段重置为零。
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
