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
| `animation` | String | ✅ | — | — | 要播放的动画名称。 |
| `mode` | String | — | `PLAY_ONCE` | — | 动画播放模式（例如 PLAY_ONCE、LOOP）。默认为 PLAY_ONCE。 |
| `self` | Boolean | — | `false` | — | 是否仅向触发玩家显示动画。 |
| `override` | Boolean | — | — | — | 是否覆盖当前正在播放的动画。 |
| `speed` | Double | — | — | — | 动画的播放速度倍率。 |
| `start` | Integer | — | — | — | 动画开始时的帧索引。 |
| `end` | Integer | — | — | — | 动画结束时的帧索引。 |

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
