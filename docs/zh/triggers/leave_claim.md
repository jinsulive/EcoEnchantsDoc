---
title: leave_claim
titleEn: leave_claim
category: triggers
subcategory: huskclaims
tags:
  - libreforge
outline: deep
---

# leave_claim <Badge type="info" text="libreforge" /> <Badge type="info" text="触发器" />

> 当玩家离开 HuskClaims 领地时触发。

> **需要依赖：** HuskClaims

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `leave_claim` |
| 所属模块 | libreforge |
| 分类 | Movement & Location |
| 组件类型 | 触发器 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/huskintegration/huskclaims/impl/TriggerLeaveClaim.kt`）。

- **源码描述**: 当玩家离开 HuskClaims 领地时触发。

- **所属分类**: `movement`

- **需要触发器数据**: `PLAYER`, `EVENT`

## 配置示例

```yaml
triggers:
  - leave_claim
```

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
