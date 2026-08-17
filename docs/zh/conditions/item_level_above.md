---
title: item_level_above
titleEn: item_level_above
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_level_above <Badge type="info" text="libreforge" />

> 需要物品等级高于一定等级。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_level_above` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `id` | String | ✅ | — | — | 要在手持物品上检查的等级类型 ID。 |
| `level` | Expression | ✅ | — | — | 物品必须超过的最低等级。 例: `5 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionItemLevelAbove.kt`）。

- **源码描述**: 当手持物品指定等级类型的等级高于指定值时通过。
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: item_level_above
  args:
    id: mining_progress # The level ID
    level: 2 # The minimum level
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
