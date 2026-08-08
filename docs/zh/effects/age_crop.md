---
title: age_crop
titleEn: age_crop
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# age_crop <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> If the block is a crop, age it by a certain amount

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `age_crop` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `age` | Expression(数学表达式) | — | `1` | — | The amount to age by \| Source: The number of growth stages to advance. Supports expressions. Example: `1 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAgeCrop.kt`）。

- **源码描述**: Advances a crop's growth by a number of stages.
- **所属分类**: `world`
- **需要触发器数据**: `BLOCK`

## 配置示例

```yaml
- id: age_crop
  args:
    age: 2 # (Optional) The amount to age by
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
