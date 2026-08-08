---
title: create_explosion
titleEn: create_explosion
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# create_explosion <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Creates an explosion

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `create_explosion` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `power` | Expression(数学表达式) | ✅ | — | — | The power of the explosion \| Source: The explosion power. Vanilla TNT is 4. Supports expressions. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of explosions \| Source: The number of explosions to create (one per tick). Supports expressions. |
| `create_fire` | Boolean | — | `true` | — | If the explosion should create fire \| Source: Whether the explosion creates fire. |
| `break_blocks` | Boolean | — | `true` | — | If the explosion should break blocks \| Source: Whether the explosion breaks blocks. |
| `player_as_damager` | Boolean | — | `false` | — | If the player should be the source of the explosion \| Source: If true, the player is attributed as the source of explosion damage. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCreateExplosion.kt`）。

- **源码描述**: Creates one or more explosions at the trigger location.
- **所属分类**: `world`, `combat`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: create_explosion
  args:
    power: 1 # The power of the explosion
    amount: 1 # The amount of explosions
    create_fire: true # If the explosion should create fire
    break_blocks: true # If the explosion should break blocks
    player_as_damager: false # If the player should be the source of the explosion
    
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
