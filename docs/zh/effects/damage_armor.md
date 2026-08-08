---
title: damage_armor
titleEn: damage_armor
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_armor <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 损耗受害者盔甲的耐久。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_armor` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `damage` | Expression(数学表达式) | ✅ | — | — | 对每件盔甲造成的耐久损耗。支持表达式。示例：`10 + %level%` |
| `slots` | String List | — | — | `HEAD`, `CHEST`, `LEGS`, `FEET` | 要损耗的盔甲栏位。省略时所有盔甲栏位都会受损。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageArmor.kt`）。

- **源码描述**: 对受害者装备的盔甲造成耐久损耗。
- **所属分类**: `combat`, `inventory`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: damage_armor
  args:
    damage: 1 # The amount of damage to deal
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
