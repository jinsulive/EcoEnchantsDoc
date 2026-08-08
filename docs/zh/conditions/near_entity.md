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

> 需要玩家位于某个实体的指定半径内。

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

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `entities` | Entity List | ✅ | — | — | 要寻找的附近实体类型列表。 |
| `radius` | Expression(数学表达式) | ✅ | — | — | 半径（搜索附近实体的范围，以方块为单位）。示例：`5 + %level% * 0.5` |
| `amount` | Integer | — | `1` | — | （可选）匹配实体的最小数量（默认为 1）。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionNearEntity.kt`）。

- **源码描述**: 当指定数量的匹配实体位于给定半径内时通过。
- **所属分类**: `entity`

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
