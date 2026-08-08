---
title: set_freeze_ticks
titleEn: set_freeze_ticks
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_freeze_ticks <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置受害者的冻结游戏刻数（霜冻/细雪效果）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_freeze_ticks` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `ticks` | Expression(数学表达式) | ✅ | — | — | 要设置的冻结游戏刻数（受害者在雪中停留的时长）。支持表达式。示例：`20 * %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetFreezeTicks.kt`）。

- **源码描述**: 设置受害者的冻结游戏刻数，控制其冻结表现及是否受到冻结伤害。
- **所属分类**: `player`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: set_freeze_ticks
  args:
    ticks: 20 # The ticks to set (How long the victim has been in snow)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
