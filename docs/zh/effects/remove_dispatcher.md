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

> Removes the dispatcher entity from the world. Only works on non-player entities.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_dispatcher` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveDispatcher.kt`）。

- **源码描述**: Removes (despawns) the dispatcher entity. Has no effect if the dispatcher is a player.
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
