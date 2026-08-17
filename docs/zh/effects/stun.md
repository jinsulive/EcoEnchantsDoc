---
title: stun
titleEn: stun
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# stun <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在一段时间内每游戏刻将实体速度归零，阻止其移动。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `stun` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `ticks` | Expression | ✅ | — | — | 使受害者眩晕的刻数。支持数学表达式。 例: `20 * %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectStun.kt`）。

- **源码描述**: 在一段时间内阻止受害者实体移动。
- **所属分类**: `combat`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: stun
  args:
    ticks: 60 # The duration in ticks to stun the entity
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
