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

> Plays a particle animation

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `particle_animation` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `particle` | The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `particle-amount` | The amount of particles to spawn on each point |
| `animation` | The ID of the animation |
| `tick-multiplier` | (Optional) increases the speed of the animation by some multiplier |
| `entity` | (Optional) specifies the entity to have the animation activate around (player, victim, projectile) |
| `use-eye-location` | (Optional) Sets the entity location to be at eye level rather than ground level |
| `particle_args` | Arguments for the animation |

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
