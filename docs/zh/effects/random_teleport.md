---
title: random_teleport
titleEn: random_teleport
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# random_teleport <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将玩家传送到半径内的随机位置。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `random_teleport` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression(数学表达式) | ✅ | — | — | 距离玩家当前位置的最大传送距离（以方块为单位）。支持表达式。示例：`10 + %level%` |
| `min_radius` | Expression(数学表达式) | — | `0` | — | （可选）距离玩家当前位置的最小传送距离（以方块为单位）。支持表达式。示例：`%level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRandomTeleport.kt`）。

- **源码描述**: 将玩家传送到半径内的随机位置，并落在最高的安全方块上。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: random_teleport
  args:
    radius: 50 # The maximum distance in blocks from the player
    min_radius: 10 # (Optional) The minimum distance in blocks from the player
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
