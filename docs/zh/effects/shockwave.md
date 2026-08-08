---
title: shockwave
titleEn: shockwave
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# shockwave <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Emits an expanding shockwave that knocks back and damages nearby entities

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shockwave` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression(数学表达式) | ✅ | — | — | The final radius of the shockwave in blocks \| Source: The maximum radius the shockwave expands to. Supports expressions. Example: `5 + %level% * 0.5` |
| `pulses` | Expression(数学表达式) | ✅ | — | — | The number of expansion pulses \| Source: How many pulses the shockwave expands over before reaching its full radius. Supports expressions. |
| `damage` | Expression(数学表达式) | ✅ | — | — | The damage dealt to each entity hit \| Source: The amount of damage dealt to each entity caught in the shockwave. Supports expressions. Example: `%level% * 2` |
| `knockback` | Expression(数学表达式) | ✅ | — | — | The knockback force applied to hit entities \| Source: The knockback force applied to each entity hit. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectShockwave.kt`）。

- **源码描述**: Creates an expanding shockwave that knocks back and damages nearby entities.
- **所属分类**: `combat`, `movement`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: shockwave
  args:
    radius: 5 # The final radius of the shockwave in blocks
    pulses: 5 # The number of expansion pulses
    damage: 3.0 # The damage dealt to each entity hit
    knockback: 1.5 # The knockback force applied to hit entities
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
