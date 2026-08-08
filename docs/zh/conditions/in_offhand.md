---
title: in_offhand
titleEn: in_offhand
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# in_offhand <Badge type="info" text="libreforge" />

> 需要玩家副手持某个物品。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `in_offhand` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `items` | Custom | — | — | — | 允许的物品列表。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInOffhand.kt`）。

- **源码描述**: 当实体副手持匹配的物品时通过。
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: in_offhand
  args:
    items: # The list of allowed items
      - diamond_sword sharpness:4
      - netherite_sword sharpness:3
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
