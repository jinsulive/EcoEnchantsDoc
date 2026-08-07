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

> Creates an explosion

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `create_explosion` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `power` | The power of the explosion |
| `amount` | The amount of explosions |
| `create_fire` | If the explosion should create fire |
| `break_blocks` | If the explosion should break blocks |
| `player_as_damager` | If the player should be the source of the explosion |

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
