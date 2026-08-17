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

> 在指定时间段内临时给予一个自定义持有器。持有器是带有效果和条件的任意事物，插件中通常是护身符、盔甲套装等。你可以临时创建自定义持有器并在触发器上给予，例如在一段时间内给予永久效果。

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
| `effects` | Effect List | ✅ | — | — | 要临时应用的效果。 |
| `duration` | Expression | ✅ | — | — | 持有器的持续时间（以刻为单位）。支持数学表达式。 例: `20 * %level%` |
| `conditions` | Condition List | — | — | — | 该持有器生效所需的条件。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddHolder.kt`）。

- **源码描述**: 在指定时长内，临时向触发者应用一组效果和条件。
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
