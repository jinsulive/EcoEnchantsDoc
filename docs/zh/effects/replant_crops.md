---
title: replant_crops
titleEn: replant_crops
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# replant_crops <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 自动重新种植作物。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `replant_crops` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `consume_seeds` | Boolean | ✅ | — | — | 补种时是否消耗玩家背包中的种子。 |
| `only_fully_grown` | Boolean | ✅ | — | — | 是否只补种完全成熟的作物。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectReplantCrops.kt`）。

- **源码描述**: 玩家破坏作物时，自动以 0 阶段重新种植。
- **所属分类**: `world`

## 配置示例

```yaml
- id: replant_crops
  args:
    consume_seeds: true # If seeds should be used when replanting crops
    only_fully_grown: true # If only fully grown crops should be replanted
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
