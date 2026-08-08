---
title: damage_offhand
titleEn: damage_offhand
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_offhand <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 损耗受害者副手物品的耐久。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_offhand` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `damage` | Custom | — | — | — | 要造成的伤害/耐久损耗值。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageOffhand.kt`）。

- **源码描述**: 对受害者副手物品造成耐久损耗。
- **所属分类**: `combat`, `inventory`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: damage_offhand
  args:
    damage: 1 # The amount of damage to deal
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
