---
title: teleport
titleEn: teleport
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# teleport <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 传送到指定位置。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `teleport` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTeleport.kt`）。

- **源码描述**: 将玩家传送到触发位置，保持其视线方向。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`, `LOCATION`

## 配置示例

```yaml
- id: teleport
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
