---
title: crit_multiplier
titleEn: crit_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# crit_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 倍率化暴击（下落攻击）伤害。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `crit_multiplier` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | 暴击伤害倍率。支持表达式。示例：`1.5 + %level% * 0.05` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCritMultiplier.kt`）。

- **源码描述**: 玩家打出暴击（下落攻击）时倍率化伤害。
- **所属分类**: `combat`
- **需要触发器数据**: `PLAYER`, `EVENT`

## 配置示例

```yaml
- id: crit_multiplier
  args:
    multiplier: 3 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
