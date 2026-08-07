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

> Spawns mobs to help you

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spawn_mobs` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of mobs to spawn |
| `ticks_to_live` | The amount of ticks the mobs should live for |
| `health` | The mob health |
| `range` | The range around the location for mobs to spawn |
| `entity` | The mob to spawn, takes a lookup string |

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
