---
title: victim_speed_multiplier
titleEn: victim_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# victim_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 临时倍率化受害者的移动速度。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `victim_speed_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 受害者移动速度要乘以的数值。支持数学表达式。 例: `1 - %level% * 0.02` |
| `duration` | Expression | ✅ | — | — | 速度变化持续的刻数。支持数学表达式。 例: `20 * %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectVictimSpeedMultiplier.kt`）。

- **源码描述**: 在指定时长内，临时倍率化受害者的移动速度。
- **所属分类**: `movement`, `combat`, `attribute`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: victim_speed_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement speed
    duration: 50 # The duration (in ticks)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
