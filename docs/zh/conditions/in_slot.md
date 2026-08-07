---
title: in_slot
titleEn: in_slot
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# in_slot <Badge type="info" text="libreforge" />

> Requires the item (e.g. the EcoItem, enchanted item, reforged item) to be in a certain slot.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `in_slot` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `slot` | The slot |

## 配置示例

```yaml
- id: in_slot
  args:
    slot: mainhand # The slot
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
