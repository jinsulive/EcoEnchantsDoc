---
title: total_damage_multiplier
titleEn: total_damage_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# total_damage_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 倍率化任意伤害触发器的所有进出伤害。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `total_damage_multiplier` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | The value to multiply the event's damage by. Supports expressions. 例: `1 + %level% * 0.05` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTotalDamageMultiplier.kt`）。

- **源码描述**: 以指定数值倍率化触发伤害事件的总伤害。
- **所属分类**: `combat`
- **需要触发器数据**: `EVENT`

## 配置示例

```yaml
- id: total_damage_multiplier
  args:
    multiplier: 0.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
