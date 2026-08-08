---
title: frost_nova
titleEn: frost_nova
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# frost_nova <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Freezes and slows nearby entities in a radius

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `frost_nova` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius in blocks \| Source: The radius around the trigger location in which entities are frozen. Supports expressions. Example: `5 + %level% * 0.5` |
| `freeze_ticks` | Expression(数学表达式) | ✅ | — | — | The number of ticks to freeze entities \| Source: How many ticks the affected entities are frozen for. Supports expressions. Example: `20 * %level%` |
| `slow_duration` | Expression(数学表达式) | — | `0` | — | The duration in ticks to apply slowness \| Source: Duration in ticks of the slowness effect applied alongside freezing. Defaults to 0 (no slowness). Example: `20 * %level%` |
| `slow_amplifier` | Expression(数学表达式) | — | `0` | — | The amplifier of the slowness effect \| Source: Amplifier level of the slowness effect (0 = Slowness I). Defaults to 0. Example: `%level% / 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectFrostNova.kt`）。

- **源码描述**: Freezes all nearby entities within a radius, optionally also applying a slowness effect.
- **所属分类**: `combat`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: frost_nova
  args:
    radius: 5 # The radius in blocks
    freeze_ticks: 60 # The number of ticks to freeze entities
    slow_duration: 100 # (Optional) The duration in ticks to apply slowness
    slow_amplifier: 1 # (Optional) The amplifier of the slowness effect
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
