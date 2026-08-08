---
title: knock_away
titleEn: knock_away
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# knock_away <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Knock the victim away from the player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `knock_away` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `velocity` | Expression(数学表达式) | ✅ | — | — | The speed at which to be pulled (magnitude of the velocity vector) \| Source: The speed at which the victim is knocked away from the player. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKnockAway.kt`）。

- **源码描述**: Launches the victim away from the player with a specified velocity.
- **所属分类**: `combat`, `movement`
- **需要触发器数据**: `PLAYER`, `VICTIM`

## 配置示例

```yaml
- id: knock_away
  args:
    velocity: 0.3 # The speed at which to be pulled (magnitude of the velocity vector)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
