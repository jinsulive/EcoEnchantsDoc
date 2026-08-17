---
title: give_food
titleEn: give_food
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_food <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 给予玩家食物值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_food` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | 要添加到玩家饥饿值的食物点数。支持数学表达式。 例: `%level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveFood.kt`）。

- **源码描述**: 为玩家恢复指定数量的食物值，上限为 20。
- **所属分类**: `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_food
  args:
    amount: 2 # The amount of food to give/take (allows negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
