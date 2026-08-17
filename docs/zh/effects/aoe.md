---
title: aoe
titleEn: aoe
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# aoe <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 对效果区域（AOE）内的所有实体运行效果。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `aoe` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effects` | Effect List | ✅ | — | — | 对范围内每个实体运行的效果。 |
| `shape` | String | ✅ | — | `circle`, `cone`, `offset_circle`, `scan_in_front`, `beam` | 要使用的范围效果（AOE）形状。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAOE.kt`）。

- **源码描述**: 在指定 AOE 形状内，对所有附近的实体运行一组效果。
- **所属分类**: `meta`
- **继承子配置**: 是（此效果继承子配置，详见对应子配置页）

## 配置示例

```yaml
- id: aoe
  args:
      effects: # The effects to run for each entity
          - id: damage_victim
            args:
                damage: 2
                true-damage: true
      shape: cone # The shape of the AOE area (see above)
      radius: 3 # The radius of the cone (see above)
      angle: 120 # The angle of the cone (see above)
    ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
