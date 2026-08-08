---
title: below_hunger_percent
titleEn: below_hunger_percent
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# below_hunger_percent <Badge type="info" text="libreforge" />

> 需要玩家的饥饿值低于其最大饥饿值的某一百分比。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `below_hunger_percent` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `percent` | Expression(数学表达式) | ✅ | — | — | 最大百分比（饥饿值百分比 0–100）。示例：`25 + %level% * 0.5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowHungerPercent.kt`）。

- **源码描述**: 当玩家的饥饿值低于或等于指定百分比时通过。
- **所属分类**: `player`

## 配置示例

```yaml
- id: below_hunger_percent
  args:
    percent: 50 # The maximum percentage
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
