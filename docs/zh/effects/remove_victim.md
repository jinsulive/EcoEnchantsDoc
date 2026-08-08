---
title: remove_victim
titleEn: remove_victim
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# remove_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Removes the victim entity from the world. Only works on non-player entities.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_victim` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveVictim.kt`）。

- **源码描述**: Removes (despawns) the victim entity. Has no effect if the victim is a player.
- **所属分类**: `combat`, `entity`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: remove_victim
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
