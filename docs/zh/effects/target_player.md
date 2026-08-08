---
title: target_player
titleEn: target_player
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# target_player <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 使受害者以玩家为目标（需要受害者是怪物）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `target_player` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTargetPlayer.kt`）。

- **源码描述**: 强制受害者怪物以玩家为目标。
- **所属分类**: `meta`, `entity`
- **需要触发器数据**: `PLAYER`, `VICTIM`

## 配置示例

```yaml
- id: target_player
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
