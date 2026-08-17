---
title: set_player_weather
titleEn: set_player_weather
category: effects
subcategory: player
tags:
  - libreforge
outline: deep
---

# set_player_weather <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 覆盖玩家客户端显示的天气，不影响服务器。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_player_weather` |
| 所属模块 | libreforge |
| 分类 | Player, Visual |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `weather` | String | ✅ | — | `clear`, `downfall` | The client weather to display. |
| `reset` | Boolean | — | `false` | — | If true, resets the player's weather back to the server weather. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetPlayerWeather.kt`）。

- **源码描述**: 覆盖玩家客户端显示的天气，不影响服务器。

- **所属分类**: `player, visual`

## 配置示例

```yaml
- id: set_player_weather
  args:
    weather: <value>
    reset: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
