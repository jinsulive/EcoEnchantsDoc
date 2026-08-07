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

| 参数名 | 说明 |
|--------|------|
| `particle` | The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `amount` | The amount of particles to spawn |

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
