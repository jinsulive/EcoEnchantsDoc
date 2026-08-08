---
title: pull_to_location
titleEn: pull_to_location
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# pull_to_location <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Get pulled to a location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `pull_to_location` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `velocity` | Expression(数学表达式) | ✅ | — | — | The speed at which to be pulled (magnitude of the velocity vector) \| Source: The strength of the pull force applied to the player. Supports expressions. Example: `1 + %level% * 0.1` |
| `jump` | Expression(数学表达式) | — | `0` | — | An upward boost added to the pull vector. Supports expressions. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPullToLocation.kt`）。

- **源码描述**: Pulls the player toward the trigger location with a specified velocity.
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`, `LOCATION`

## 配置示例

```yaml
- id: pull_to_location
  args:
    velocity: 1.5 # The speed at which to be pulled (magnitude of the velocity vector)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
