---
title: has_enchant
titleEn: has_enchant
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# has_enchant <Badge type="info" text="libreforge" />

> Multiple enchants and/or slots are supported:

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_enchant` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `enchant` | Enchantment List | ✅ | — | — | The enchant ID \| Source: The enchantment(s) to require, optionally with a level or range (e.g. sharpness:3-5). Example: `sharpness:3-5, unbreaking:2` |
| `slot` | String List | ✅ | — | — | The slot \| Source: The equipment slot(s) to check for the enchantment. Example: `mainhand, 9` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasEnchant.kt`）。

- **源码描述**: Passes when the entity has an item with the specified enchantment in the specified slot.
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: has_enchant
  args:
    enchant: sharpness # The enchant ID 
    slot: mainhand # The slot
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
