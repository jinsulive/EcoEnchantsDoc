---
title: wearing_chestplate
titleEn: wearing_chestplate
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# wearing_chestplate <Badge type="info" text="libreforge" />

> Requires a player to have an item as their chestplate

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `wearing_chestplate` |
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

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionWearingChestplate.kt`）。

- **源码描述**: Passes when the entity is wearing the specified chestplate.
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: wearing_chestplate
  args:
    items: # The list of allowed items
      - diamond_chestplate protection:4
      - netherite_chestplate protection:3
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
