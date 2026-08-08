---
title: soul_rip
titleEn: soul_rip
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# soul_rip <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 伤害附近的实体，并按造成的伤害治疗玩家。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `soul_rip` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression(数学表达式) | ✅ | — | — | 影响实体的半径（以方块为单位）。支持表达式。示例：`5 + %level% * 0.5` |
| `damage` | Expression(数学表达式) | ✅ | — | — | 对每个附近实体造成的伤害。支持表达式。示例：`%level% * 2` |
| `heal_multiplier` | Expression(数学表达式) | — | `1.0` | — | （可选）作用于总治疗量的倍率，默认为 1.0。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSoulRip.kt`）。

- **源码描述**: 伤害半径内的附近敌人，并按造成的伤害治疗玩家。
- **所属分类**: `combat`, `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: soul_rip
  args:
    radius: 5 # The radius in blocks to affect entities
    damage: 4.0 # The damage dealt to each nearby entity
    heal_multiplier: 1.0 # (Optional) Multiplier applied to total healing, defaults to 1.0
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
