---
title: near_entity
titleEn: near_entity
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# near_entity <Badge type="info" text="libreforge" />

> Requires a player to be within a certain radius of an entity

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `near_entity` |
| 所属模块 | libreforge |
| 分类 | 位置与移动（Position & Movement） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `entities` | The list of entities |
| `radius` | The radius |
| `amount` | (Optional) The minimum amount of listed entities |

## 配置示例

```yaml
- id: near_entity
  args:
    entities: # The list of entities
      - zombie
      - ecomobs:illusioner
    radius: 25 # The radius
    amount: 5 # (Optional) The minimum amount of listed entities
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
