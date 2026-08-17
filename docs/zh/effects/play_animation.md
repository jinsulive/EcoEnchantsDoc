---
title: play_animation
titleEn: play_animation
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# play_animation <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 播放 Model Engine 动画（实体必须启用自定义模型）。

> **需要依赖：** BetterModel

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `play_animation` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `animation` | String | ✅ | — | — | The name of the animation to play. |
| `mode` | String | — | `PLAY_ONCE` | — | The animation playback mode (e.g. PLAY_ONCE, LOOP). Defaults to PLAY_ONCE. |
| `self` | Boolean | — | `false` | — | Whether to show the animation only to the triggering player. |
| `override` | Boolean | — | — | — | Whether to override any currently playing animation. |
| `speed` | Double | — | — | — | Playback speed multiplier for the animation. |
| `start` | Integer | — | — | — | The frame index at which to start the animation. |
| `end` | Integer | — | — | — | The frame index at which to end the animation. |

## 配置示例

```yaml
- id: play_animation
  args:
    animation: strike # The name of the animation
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
