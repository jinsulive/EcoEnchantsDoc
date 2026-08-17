---
title: wearing_helmet
titleEn: wearing_helmet
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# wearing_helmet <Badge type="info" text="libreforge" />

> 需要玩家在头盔栏位装备物品。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `wearing_helmet` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `items` / `item`（任一） | Item List | ✅ | — | — | 要检查的物品。 继承自 `ItemCondition` 抽象模板。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionWearingHelmet.kt`）。

- **源码描述**: 当实体戴着指定的头盔时通过。
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: wearing_helmet
  args:
    items: # The list of allowed items
      - diamond_helmet protection:4
      - netherite_helmet protection:3
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
