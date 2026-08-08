---
title: blink
titleEn: blink
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# blink <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将玩家朝其注视方向向前传送，遇到实心方块时停止。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `blink` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `distance` | Expression(数学表达式) | ✅ | — | — | 向前传送的最大方块数。支持表达式。示例：`5 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBlink.kt`）。

- **源码描述**: 沿玩家的视线方向向前传送，碰到实心方块时停止。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: blink
  args:
    distance: 10 # The maximum number of blocks to teleport forward
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
