---
title: has_item
titleEn: has_item
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# has_item <Badge type="info" text="libreforge" />

> Requires a player to have an item in their inventory

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_item` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `items` | Custom | — | — | — | The list of allowed items |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasItem.kt`）。

- **源码描述**: Passes when the player has the specified item in their inventory.
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: has_item
  args:
    items: # The list of allowed items
      - talismans:archery_2 sparkly
      - netherite_ingot
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
