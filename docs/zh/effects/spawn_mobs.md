---
title: spawn_mobs
titleEn: spawn_mobs
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# spawn_mobs <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 生成生物来帮助你。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spawn_mobs` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | 要生成的生物数量。支持数学表达式。 例: `1 + %level% / 5` |
| `ticks_to_live` | Expression | ✅ | — | — | 生物在被移除前存活的刻数。支持数学表达式。 例: `20 * %level%` |
| `range` | Expression | ✅ | — | — | 触发位置周围可生成生物的半径。支持数学表达式。 例: `5 + %level% * 0.5` |
| `entity` | Entity | ✅ | — | — | 要生成的实体类型。 |
| `health` | Expression | — | `20` | — | 要为每个生成的生物设置的最大生命值（及初始生命值）。支持数学表达式。 例: `20 + %level% * 5` |
| `owner` | Boolean | — | — | — |  |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnMobs.kt`）。

- **源码描述**: 在触发位置附近生成多个以受害者为目标的生物。
- **所属分类**: `entity`
- **需要触发器数据**: `PLAYER`, `LOCATION`

## 配置示例

```yaml
- id: spawn_mobs
  args:
    amount: 4 # The amount of mobs to spawn
    ticks_to_live: 120 # The amount of ticks the mobs should live for
    health: 5 # The mob health
    range: 10 # The range around the location for mobs to spawn
    entity: cave_spider speed:0.8 # The mob to spawn, takes a lookup string
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
