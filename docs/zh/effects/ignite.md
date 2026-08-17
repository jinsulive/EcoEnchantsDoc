---
title: ignite
titleEn: ignite
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# ignite <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 点燃受害者。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `ignite` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `damage_per_tick` | Expression | ✅ | — | — | 每个火焰刻造成的伤害量。支持数学表达式。 例: `%level%` |
| `ticks` | Expression | ✅ | — | — | 要应用于受害者的火焰刻数。支持数学表达式。 例: `20 * %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectIgnite.kt`）。

- **源码描述**: 使受害者着火指定数量的游戏刻，并可自定义每游戏刻的伤害。
- **所属分类**: `combat`
- **需要触发器数据**: `VICTIM`, `PLAYER`

## 配置示例

```yaml
- id: ignite
  args:
    damage_per_tick: 8 # The amount of damage to deal per fire tick
    ticks: 100 # The amount of time the victim should be on fire for
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
