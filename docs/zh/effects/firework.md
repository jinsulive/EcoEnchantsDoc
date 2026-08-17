---
title: firework
titleEn: firework
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# firework <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 从触发位置发射烟花。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `firework` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `power` | Integer | — | `0` | — | 烟花的飞行持续时间（0–255）。默认为 0。 |
| `effects` | Dynamic | — | — | — | 烟花效果子节列表，每项包含 type、colors、fade-colors、trail 和 flicker。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectFirework.kt`）。

- **源码描述**: 在触发位置发射烟花，颜色、形状和效果均可配置。
- **所属分类**: `visual`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: firework
  args:
    power: 1 # The power of the firework, which affects how high it flies before exploding. (0-255, 0 is instant explosion)
    effects: # You can specify multiply for the firework.
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
