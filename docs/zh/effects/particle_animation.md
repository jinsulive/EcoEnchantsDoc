---
title: particle_animation
titleEn: particle_animation
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# particle_animation <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 播放粒子动画。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `particle_animation` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `particle` | String | ✅ | — | — | The particle type to spawn during the animation. 例: `flame` |
| `animation` | String | ✅ | — | `circle`, `double_helix`, `ground_spiral`, `helix`, `trace`, `twirl`, `wing_tips`, `projectile_trail` | The animation pattern to use (e.g. circle, helix). |
| `particle-amount` | Expression | — | `1` | — | The number of particles to spawn per animation point per tick. Supports expressions. |
| `entity` | String | — | `player` | `player`, `victim`, `projectile` | The entity to anchor the animation to. |
| `use-eye-location` | Boolean | — | `false` | — | Whether to use the entity's eye location instead of their feet. |
| `particle_args` | 子节 | — | — | — | **子节参数（嵌套配置）** —— 详见下方子节字段。 |
| `tick-multiplier` | 动态 | — | — | — | **隐式参数**（源码 `args.has()` 支持，未在 `arguments` 中声明）。 |

> 💡 完整的内置粒子类型（共 115 个）请参阅 [粒子类型](../guide/particles)。

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectParticleAnimation.kt`）。

- **源码描述**: 使用指定动画模式，在触发位置随时间播放粒子动画。
- **所属分类**: `visual`
- **需要触发器数据**: `PLAYER`, `LOCATION`
- **继承子配置**: 是（此效果继承子配置，详见对应子配置页）

## 配置示例

```yaml
- id: particle_animation
  args:
      particle: soul # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
      particle-amount: 1 # The amount of particles to spawn on each point
      animation: ground_spiral # The ID of the animation
      tick-multiplier: 1 # (Optional) increases the speed of the animation by some multiplier
      entity: player # (Optional) specifies the entity to have the animation activate around (player, victim, projectile)
      use-eye-location: true # (Optional) Sets the entity location to be at eye level rather than ground level
      particle_args: # Arguments for the animation
          scalar: 1.618
          distance-scalar: 0.5
          duration: 20
    ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
