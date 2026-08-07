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

> Requires a player to have an item as their helmet

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

| 参数名 | 说明 |
|--------|------|
| `items` | The list of allowed items |

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
