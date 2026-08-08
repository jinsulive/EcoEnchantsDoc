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

> Teleport a player to a specific location

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
| `world` | String | ✅ | — | — | The world name \| Source: The name of the world to teleport to. Example: `world_nether` |
| `x` | Expression(数学表达式) | ✅ | — | — | The x-coordinate \| Source: The X coordinate to teleport to. Supports expressions. Example: `100` |
| `y` | Expression(数学表达式) | ✅ | — | — | The y-coordinate \| Source: The Y coordinate to teleport to. Supports expressions. Example: `64` |
| `z` | Expression(数学表达式) | ✅ | — | — | The z-coordinate \| Source: The Z coordinate to teleport to. Supports expressions. Example: `-200` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTeleportTo.kt`）。

- **源码描述**: Teleports the player to a specific coordinate in a named world.
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
