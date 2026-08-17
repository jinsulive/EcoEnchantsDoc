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

> 冻结并减速半径内的附近实体。

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
| `radius` | Expression | ✅ | — | — | 触发位置周围冰冻实体的半径。支持数学表达式。 例: `5 + %level% * 0.5` |
| `freeze_ticks` | Expression | ✅ | — | — | 受影响实体被冰冻的刻数。支持数学表达式。 例: `20 * %level%` |
| `slow_duration` | Expression | — | `0` | — | 与冰冻同时应用的缓慢效果持续时间（以刻为单位）。默认为 0（无缓慢）。 例: `20 * %level%` |
| `slow_amplifier` | Expression | — | `0` | — | 缓慢效果的药水等级（0 = 缓慢 I）。默认为 0。 例: `%level% / 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectFrostNova.kt`）。

- **源码描述**: 冻结半径内的所有附近实体，可选同时施加缓慢效果。
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
