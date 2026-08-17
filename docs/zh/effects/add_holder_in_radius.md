---
title: add_holder_in_radius
titleEn: add_holder_in_radius
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_holder_in_radius <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在指定时间段内临时给予一个自定义持有器。持有器是带有效果和条件的任意事物，插件中通常是护身符、盔甲套装等。你可以临时创建自定义持有器并在触发器上给予，例如在一段时间内给予周围玩家永久效果。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_holder_in_radius` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effects` | Effect List | ✅ | — | — | The effects to apply temporarily to nearby entities. |
| `duration` | Expression | ✅ | — | — | How long to apply the holder, in ticks. Supports expressions. 例: `20 * %level%` |
| `radius` | Expression | ✅ | — | — | The radius to apply effects within. Supports expressions. 例: `5 + %level% * 0.5` |
| `apply-to-self` | Boolean | — | `false` | — | Whether to also apply the effects to the dispatcher. |
| `conditions` | Condition List | — | — | — | The conditions the holder requires to be active. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddHolderInRadius.kt`）。

- **源码描述**: 在指定半径内，临时向所有附近的实体应用一组效果和条件。
- **所属分类**: `meta`

## 配置示例

```yaml
- id: add_holder_in_radius
  args:
    effects: 
      - id: movement_speed_multiplier
        args:
          multiplier: 1.25
    conditions: []
    duration: 300 # The duration, in ticks
    radius: 5.3 # The radius, in blocks
    apply-to-self: false # If the player should also get the holder (Defaults to false)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
