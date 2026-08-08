---
title: rapid_bows
titleEn: rapid_bows
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# rapid_bows <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Allows bows to be shot at full speed without pulling back as far

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `rapid_bows` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `percent_faster` | Expression(数学表达式) | ✅ | — | — | The percentage less tension to require \| Source: How many percent faster the bow charges. Supports expressions. Example: `10 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRapidBows.kt`）。

- **源码描述**: Allows the player to fire bows faster by a given percentage, as a permanent passive effect.
- **所属分类**: `combat`

## 配置示例

```yaml
- id: rapid_bows
  args:
    percent_faster: 15 # The percentage less tension to require
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
