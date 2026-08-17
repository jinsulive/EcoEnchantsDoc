---
title: set_player_time
titleEn: set_player_time
category: effects
subcategory: player
tags:
  - libreforge
outline: deep
---

# set_player_time <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 覆盖玩家客户端显示的时间，不影响服务器。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_player_time` |
| 所属模块 | libreforge |
| 分类 | Player, Visual |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `time` | Integer | ✅ | — | — | 要显示的时间（以刻为单位）（0=黎明、6000=正午、12000=黄昏、18000=午夜）。 |
| `relative` | Boolean | — | `false` | — | 若为 true，则时间相对于世界的当前时间应用，而非作为固定值。 |
| `reset` | Boolean | — | `false` | — | 若为 true，则将玩家时间重置为服务器时间。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetPlayerTime.kt`）。

- **源码描述**: 覆盖玩家客户端显示的时间，不影响服务器。

- **所属分类**: `player, visual`

## 配置示例

```yaml
- id: set_player_time
  args:
    time: <value>
    relative: <value>
    reset: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
