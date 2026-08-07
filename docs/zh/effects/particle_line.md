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

> Spawns a line of particles between you and the target location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `particle_line` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `particle` | The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `amount` | The amount of particles to spawn on each point |
| `spacing` | The spacing between each particle in the line |

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
