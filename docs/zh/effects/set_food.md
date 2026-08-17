---
title: set_food
titleEn: set_food
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_food <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置玩家的食物值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_food` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | 要设置的食物等级（0–20）。支持数学表达式。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetFood.kt`）。

- **源码描述**: 将玩家的食物值设置为指定值。
- **所属分类**: `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: set_food
  args:
    amount: 1 # The food level to set
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
