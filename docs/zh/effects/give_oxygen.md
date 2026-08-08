---
title: give_oxygen
titleEn: give_oxygen
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_oxygen <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 给予玩家氧气。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_oxygen` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression(数学表达式) | ✅ | — | — | 要给予的氧气量（支持负数）。支持表达式。示例：`%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveOxygen.kt`）。

- **源码描述**: 为玩家的氧气储备恢复指定数量的空气游戏刻。
- **所属分类**: `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_oxygen
  args:
    amount: 1 # The amount of oxygen to give (supports negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
