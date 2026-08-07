---
title: vortex
titleEn: vortex
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# vortex <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Pulls nearby entities toward a location over a duration, then damages them

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `vortex` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `radius` | The radius in blocks to pull entities from |
| `duration` | The duration in ticks to pull entities |
| `damage` | The damage dealt to all affected entities at the end |
| `pull_strength` | (Optional) The strength of the pull each tick, defaults to 0.3 |
| `whitelist` | (Optional) A list of entity types to pull, if not specified all entities will be pulled |
| `blacklist` | (Optional) A list of entity types to ignore, if not specified no entities will be ignored |

## 配置示例

```yaml
- id: vortex
  args:
    radius: 6 # The radius in blocks to pull entities from
    duration: 40 # The duration in ticks to pull entities
    damage: 5.0 # The damage dealt to all affected entities at the end
    pull_strength: 0.3 # (Optional) The strength of the pull each tick, defaults to 0.3
    whitelist: # (Optional) A list of entity types to pull, if not specified all entities will be pulled
      - zombie
      - skeleton
    blacklist: # (Optional) A list of entity types to ignore, if not specified no entities will be ignored
      - ender_dragon
      - wither
      - warden
      - elder_guardian
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
