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

> 允许弓无需拉满即可全速射击。

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
| `percent_faster` | Expression(数学表达式) | ✅ | — | — | 弓弦拉满所需减少的百分比。支持表达式。示例：`10 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRapidBows.kt`）。

- **源码描述**: 作为永久被动效果，允许玩家以指定百分比更快地拉满弓弦。
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
