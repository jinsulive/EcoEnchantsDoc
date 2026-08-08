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

> Damages nearby entities and heals the player for the damage dealt

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
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius in blocks to affect entities \| Source: The radius around the player to search for targets. Supports expressions. Example: `5 + %level% * 0.5` |
| `damage` | Expression(数学表达式) | ✅ | — | — | The damage dealt to each nearby entity \| Source: The amount of damage dealt to each nearby entity. Supports expressions. Example: `%level% * 2` |
| `heal_multiplier` | Expression(数学表达式) | — | `1.0` | — | (Optional) Multiplier applied to total healing, defaults to 1.0 \| Source: A multiplier applied to the total damage dealt before it is converted to healing. Example: `0.5 + %level% * 0.02` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSoulRip.kt`）。

- **源码描述**: Damages nearby enemies within a radius and heals the player based on the damage dealt.
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
