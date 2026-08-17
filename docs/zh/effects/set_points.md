---
title: set_points
titleEn: set_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置点数（不了解可查看点数百科页面）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The point type to set. |
| `amount` | Expression | ✅ | — | — | The value to set the player's point counter to. Supports expressions. 例: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetPoints.kt`）。

- **源码描述**: 将玩家的点数计数设置为指定值。
- **所属分类**: `economy`, `points`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: set_points
  args:
    type: g_souls # The point to set
    amount: 0 # The amount to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
