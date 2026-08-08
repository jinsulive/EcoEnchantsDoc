---
title: drop_weighted_random_item
titleEn: drop_weighted_random_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_weighted_random_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Drops a random item at a location, with weighting for different items

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drop_weighted_random_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `items` | Dynamic Config | ✅ | — | — | The list of items to choose from (with weight) \| Source: A list of weighted item groups. Each entry has a weight and an items list. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDropWeightedRandomItem.kt`）。

- **源码描述**: Drops one item chosen from a weighted list at the trigger location.
- **所属分类**: `inventory`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: drop_weighted_random_item
  args:
    items: # The list of items to choose from
      - items: # You can specify a list of items for each weight
          - diamond 2
          - ancient_debris 2
        weight: 2
      - item: ancient_debris # Or just a single item
        weight: 5
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
