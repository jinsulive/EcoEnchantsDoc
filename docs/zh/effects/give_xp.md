---
title: give_xp
titleEn: give_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gives experience points

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_xp` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of xp to give \| Source: The amount of experience points to give the player. Supports expressions. Example: `%level% * 10` |
| `apply_mending` | Boolean | — | `true` | — | PAPER ONLY - If mending should be applied from the xp \| Source: Whether to apply Mending repair before adding XP to the bar (Paper only). Defaults to true. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveXp.kt`）。

- **源码描述**: Gives the player experience points when triggered, with optional Mending repair support.
- **所属分类**: `economy`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_xp
  args:
    amount: 100 # The amount of xp to give
    apply_mending: true # PAPER ONLY - If mending should be applied from the xp
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
