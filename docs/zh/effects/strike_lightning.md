---
title: strike_lightning
titleEn: strike_lightning
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# strike_lightning <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在指定位置释放闪电。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `strike_lightning` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | — | `1` | — | 闪电打击次数。支持数学表达式。 例: `1 + %level% / 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectStrikeLightning.kt`）。

- **源码描述**: 在触发位置释放闪电。
- **所属分类**: `combat`, `world`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: strike_lightning
  args:
    amount: 5 # The amount of lightning strikes
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
