---
title: give_absorption
titleEn: give_absorption
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_absorption <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Adds absorption points to the player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_absorption` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The number of absorption points to add \| Source: The number of absorption hearts to add. Supports expressions. Example: `%level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveAbsorption.kt`）。

- **源码描述**: Grants the player additional absorption hearts, expanding the max absorption cap if needed.
- **所属分类**: `player`, `attribute`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_absorption
  args:
    amount: 4 # The number of absorption points to add
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
