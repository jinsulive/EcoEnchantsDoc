---
title: add_permanent_holder_in_radius
titleEn: add_permanent_holder_in_radius
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_permanent_holder_in_radius <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 给予你周围一定半径内的玩家一个自定义持有器。持有器是带有效果和条件的任意事物，插件中通常是护身符、盔甲套装等。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_permanent_holder_in_radius` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effects` | Effect List | ✅ | — | — | 应用于附近实体的效果。 |
| `conditions` | Condition List | — | — | — | 持有器激活所需的条件。 |
| `radius` | Expression(数学表达式) | ✅ | — | — | 效果作用半径（以方块为单位）。支持表达式。示例：`5 + %level% * 0.5` |
| `apply-to-self` | Boolean | — | `false` | — | 玩家是否也获得该持有器效果。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddPermanentHolderInRadius.kt`）。

- **源码描述**: 持有器激活期间，向半径内的所有附近实体永久应用一组效果和条件。
- **所属分类**: `meta`

## 配置示例

```yaml
- id: add_permanent_holder_in_radius
  args:
    effects: 
      - id: multiply_all_stats
        args:
          multiplier: 1.05
    conditions: []
    radius: 5.3 # The radius, in blocks
    apply-to-self: false # If the player should also get the holder (Defaults to false)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
