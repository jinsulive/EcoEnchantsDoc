---
title: cancel_event
titleEn: cancel_event
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# cancel_event <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Cancel the event that fired the trigger

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `cancel_event` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCancelEvent.kt`）。

- **源码描述**: Cancels the triggering event.
- **所属分类**: `meta`
- **需要触发器数据**: `EVENT`

## 配置示例

```yaml
- id: cancel_event
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
