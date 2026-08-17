---
title: spawn_particle
titleEn: spawn_particle
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# spawn_particle <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Spawns a particle

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spawn_particle` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `particle` | Any | ✅ | — | — | The particle to spawn, as an eco particle string. 例: `flame` |
| `amount` | Expression | — | `1` | — | The number of particles to spawn. Supports expressions. |

> 💡 完整的内置粒子类型（共 115 个）请参阅 [粒子类型](../guide/particles)。

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnParticle.kt`）。

- **源码描述**: 在触发位置生成粒子。
- **所属分类**: `visual`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: spawn_particle
  args:
    particle: heart # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
    amount: 10 # The amount of particles to spawn
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
