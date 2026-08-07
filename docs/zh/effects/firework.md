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

> Launches a firework from the trigger location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `firework` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `power` | The power of the firework, which affects how high it flies before exploding. (0-255, 0 is instant explosion) |
| `effects` | You can specify multiple firework effects |

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
