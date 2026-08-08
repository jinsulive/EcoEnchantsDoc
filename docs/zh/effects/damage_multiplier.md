---
title: damage_multiplier
titleEn: damage_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiplies incoming or outgoing damage from any damage trigger

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_multiplier` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier \| Source: The damage multiplier to apply. Supports expressions. Example: `1.2 + %level% * 0.02` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageMultiplier.kt`）。

- **源码描述**: Multiplies the damage of the triggering attack.
- **所属分类**: `combat`
- **需要触发器数据**: `EVENT`

## 配置示例

```yaml
- id: damage_multiplier
  args:
    multiplier: 0.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
