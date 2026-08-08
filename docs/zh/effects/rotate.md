---
title: rotate
titleEn: rotate
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# rotate <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Spin around

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `rotate` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `angle` | Expression(数学表达式) | ✅ | — | — | The angle to rotate / spin (in degrees) \| Source: The number of degrees to add to the player's current yaw. Supports expressions. Example: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRotate.kt`）。

- **源码描述**: Rotates the player's yaw by a specified angle.
- **所属分类**: `movement`, `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: rotate
  args:
    angle: 180 # The angle to rotate / spin (in degrees)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
