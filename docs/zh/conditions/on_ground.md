---
title: on_ground
titleEn: on_ground
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# on_ground <Badge type="info" text="libreforge" />

> 需要玩家站在地面上。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `on_ground` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionOnGround.kt`）。

- **源码描述**: 当实体站在实心地面上时通过。
- **所属分类**: `player`

## 配置示例

```yaml
- id: on_ground
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
