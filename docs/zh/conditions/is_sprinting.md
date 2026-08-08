---
title: is_sprinting
titleEn: is_sprinting
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_sprinting <Badge type="info" text="libreforge" />

> 需要玩家正在疾跑。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `is_sprinting` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsSprinting.kt`）。

- **源码描述**: 当玩家正在疾跑时通过。
- **所属分类**: `player`

## 配置示例

```yaml
- id: is_sprinting
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
