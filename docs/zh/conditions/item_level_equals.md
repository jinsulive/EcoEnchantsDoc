---
title: item_level_equals
titleEn: item_level_equals
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_level_equals <Badge type="info" text="libreforge" />

> Requires an item to be on a certain level

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_level_equals` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `id` | Custom | — | — | — | The level ID |
| `level` | Expression(数学表达式) | ✅ | — | — | The level \| Source: The exact level the item must have. Example: `5 + %level%` |
| `name` | String | ✅ | — | — | The name of the level type to check on the held item. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionItemLevelEquals.kt`）。

- **源码描述**: Passes when the held item's level for a given level type equals the specified value.
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: item_level_equals
  args:
    id: mining_progress # The level ID
    level: 3 # The level
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
