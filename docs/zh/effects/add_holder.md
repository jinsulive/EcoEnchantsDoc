---
title: add_holder
titleEn: add_holder
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_holder <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gives a custom holder temporarily for a given period of time. A holder is anything with effects and conditions, in plugins typically a Talisman, Armor Set, etc. You can create custom holders temporarily and give them on a trigger, for example to give permanent effects for a period of time.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_holder` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effects` | Effect List | ✅ | — | — | The effects to apply in the temporary holder \| Source: The effects to apply temporarily. |
| `conditions` | Condition List | — | — | — | The conditions for the holder \| Source: The conditions the holder requires to be active. |
| `duration` | Expression(数学表达式) | ✅ | — | — | The duration, in ticks \| Source: How long to apply the holder, in ticks. Supports expressions. Example: `20 * %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddHolder.kt`）。

- **源码描述**: Temporarily applies a set of effects and conditions to the dispatcher for a given duration.
- **所属分类**: `meta`

## 配置示例

```yaml
- id: add_holder
  args:
    effects: 
      - id: movement_speed_multiplier
        args:
          multiplier: 1.25
    conditions: []
    duration: 300 # The duration, in ticks
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
