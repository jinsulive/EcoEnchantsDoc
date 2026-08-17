---
title: shoot
titleEn: shoot
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# shoot <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Shoots a projectile

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shoot` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `projectile` | Entity | ✅ | — | — | 要作为弹射物发射的实体类型，例如 ARROW 或 SNOWBALL。 |
| `inherit_velocity` | Boolean | — | `false` | — | 弹射物是否应继承玩家当前的速度。 |
| `launch-at-location` | Boolean | — | `false` | — | 发射后弹射物是否应传送到触发位置。 |
| `allow_pickup` | Boolean | — | `false` | — | 弹射物是否可被玩家拾取（适用于箭矢）。 |
| `no_source` | Boolean | — | `false` | — | 弹射物是否应没有射手，从而避免归因于玩家。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectShoot.kt`）。

- **源码描述**: 从玩家处发射指定实体类型的弹射物。
- **所属分类**: `combat`
- **需要触发器数据**: `PLAYER`
- **继承子配置**: 是（此效果继承子配置，详见对应子配置页）

## 配置示例

```yaml
- id: shoot
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
    projectile: arrow # The name of the projectile
    launch-at-location: false # If the projectile should be launched at the location of the trigger rather than the player (Default: false)
    allow_pickup: false # If the arrow should be able to be picked up by players (Default: false)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
