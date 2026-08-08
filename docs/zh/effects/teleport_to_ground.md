---
title: teleport_to_ground
titleEn: teleport_to_ground
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# teleport_to_ground <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 传送到地面。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `teleport_to_ground` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTeleportToGround.kt`）。

- **源码描述**: 将玩家正下方传送到第一个实心地面。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: teleport_to_ground
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
