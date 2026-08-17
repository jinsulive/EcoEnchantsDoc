---
title: remove_dispatcher
titleEn: remove_dispatcher
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# remove_dispatcher <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将触发者实体从世界中移除。仅对非玩家实体生效。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_dispatcher` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveDispatcher.kt`）。

- **源码描述**: 移除（消除）触发者实体。若触发者为玩家则无效。
- **所属分类**: `combat`, `entity`

## 配置示例

```yaml
- id: remove_dispatcher
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
