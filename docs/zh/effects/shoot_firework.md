---
title: shoot_firework
titleEn: shoot_firework
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# shoot_firework <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Shoots a firework

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shoot_firework` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `inherit_velocity` | Boolean | — | `false` | — | If velocity should be inherited from the trigger \| Source: Whether the firework should inherit the player's current velocity. |
| `no_source` | Boolean | — | `false` | — | If the player should not be marked as the source, leaving this option out defaults to false \| Source: Whether the firework should have no shooter, preventing attribution to the player. |
| `launch-at-location` | Boolean | — | `false` | — | If the firework should be launched at the location of the trigger rather than the player \| Source: Whether the firework should be teleported to the trigger location after launch. |
| `power` | Integer | — | `0` | — | The power of the firework, which affects how far it flies before exploding. (0-255, 0 is instant explosion) \| Source: The flight duration power of the firework (0-255). |
| `effects` | Dynamic Config | — | — | — | You can specify multiply effects for the firework. \| Source: List of firework effect subsections defining the firework's appearance. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectShootFirework.kt`）。

- **源码描述**: Launches a firework projectile from the player with configurable visual effects.
- **所属分类**: `visual`, `combat`
- **需要触发器数据**: `PLAYER`
- **继承子配置**: 是（此效果继承子配置，详见对应子配置页）

## 配置示例

```yaml
- id: shoot_firework
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
    launch-at-location: false # If the firework should be launched at the location of the trigger rather than the player (Default: false)
    power: 1 # The power of the firework, which affects how far it flies before exploding. (0-255, 0 is instant explosion)
    effects: # You can specify multiply effects for the firework.
      - type: CREEPER # The firework shape: BALL, BALL_LARGE, STAR, CREEPER, BURST
        colors: # The firework colors, in hex format
          - "#e5006d"
          - "#ff0000"
        fade_colors:
          - "#ffffff"
        trail: true # If the firework should have a trail
        flicker: true # If the firework should flicker
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
