---
title: transmission
titleEn: transmission
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# transmission <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将玩家朝其面向的方向向前传送（类似 AotE）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `transmission` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `distance` | Expression | ✅ | — | — | 向前传送玩家的最大距离。支持数学表达式。 例: `10 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTransmission.kt`）。

- **源码描述**: 将玩家向前传送指定距离，遇到路径上的第一个实心方块时停止。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: transmission
  args:
    distance: 5 # The distance to teleport
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
