---
title: teleport_to
titleEn: teleport_to
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# teleport_to <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将玩家传送到特定位置。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `teleport_to` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `world` | String | ✅ | — | — | 要传送到的世界名称。示例：`world_nether` |
| `x` | Expression(数学表达式) | ✅ | — | — | X 坐标。支持表达式。示例：`100` |
| `y` | Expression(数学表达式) | ✅ | — | — | Y 坐标。支持表达式。示例：`64` |
| `z` | Expression(数学表达式) | ✅ | — | — | Z 坐标。支持表达式。示例：`-200` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTeleportTo.kt`）。

- **源码描述**: 将玩家传送到指定世界中的特定坐标。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: teleport_to
  args:
    world: world_nether # The world name
    x: 100 # The x-coordinate
    y: 50 # The y-coordinate
    z: -581.2 # The z-coordinate
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
