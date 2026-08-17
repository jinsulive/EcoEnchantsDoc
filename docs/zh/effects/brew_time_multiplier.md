---
title: brew_time_multiplier
titleEn: brew_time_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# brew_time_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化酿造药水所需的时间。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `brew_time_multiplier` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 要应用的倍率。支持数学表达式。 继承自 `MultiplierEffect` 抽象模板。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBrewTimeMultiplier.kt`）。

- **源码描述**: 持有器激活期间，倍率化酿造药水所需的时间。
- **所属分类**: `player`

## 配置示例

```yaml
- id: brew_time_multiplier
  args:
    multiplier: 0.8 # The multiplier
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
