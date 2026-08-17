---
title: particle_line
titleEn: particle_line
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# particle_line <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在你与目标位置之间生成一条粒子线。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `particle_line` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `particle` | String | ✅ | — | — | The particle type to spawn along the line. 例: `flame` |
| `amount` | Expression | ✅ | — | — | The number of particles to spawn at each point along the line. Supports expressions. |
| `spacing` | Expression | ✅ | — | — | The distance between each particle point along the line. Supports expressions. |

> 💡 完整的内置粒子类型（共 115 个）请参阅 [粒子类型](../guide/particles)。

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectParticleLine.kt`）。

- **源码描述**: 在玩家眼睛与触发位置之间生成一条粒子线。
- **所属分类**: `visual`
- **需要触发器数据**: `PLAYER`, `LOCATION`

## 配置示例

```yaml
- id: particle_line
  args:
    particle: heart # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
    amount: 10 # The amount of particles to spawn on each point
    spacing: 1.5 # The spacing between each particle in the line
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
