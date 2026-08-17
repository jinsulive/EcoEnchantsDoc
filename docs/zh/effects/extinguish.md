---
title: extinguish
titleEn: extinguish
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# extinguish <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 扑灭玩家身上的火焰。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `extinguish` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectExtinguish.kt`）。

- **源码描述**: 立即扑灭玩家身上的火焰。
- **所属分类**: `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: extinguish
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
