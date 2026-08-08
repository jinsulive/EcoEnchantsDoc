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

> 产生爆炸。

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
| `power` | Expression(数学表达式) | ✅ | — | — | 爆炸威力。原版 TNT 为 4。支持表达式。 |
| `amount` | Expression(数学表达式) | ✅ | — | — | 要产生的爆炸次数（每游戏刻一次）。支持表达式。 |
| `create_fire` | Boolean | — | `true` | — | 爆炸是否产生火焰。 |
| `break_blocks` | Boolean | — | `true` | — | 爆炸是否破坏方块。 |
| `player_as_damager` | Boolean | — | `false` | — | 是否将玩家视为爆炸伤害的来源。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCreateExplosion.kt`）。

- **源码描述**: 在触发位置产生一次或多次爆炸。
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
