---
title: shoot_arrow
titleEn: shoot_arrow
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# shoot_arrow <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Shoots an arrow

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shoot_arrow` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `inherit_velocity` | If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect) |
| `no_source` | If the player should not be marked as the source, leaving this option out defaults to false |
| `launch-at-location` | If the arrow should be launched at the location of the trigger rather than the player |
| `allow_pickup` | If the arrow should be able to be picked up by players |

## 配置示例

```yaml
- id: shoot_arrow
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
    launch-at-location: false # If the arrow should be launched at the location of the trigger rather than the player (Default: false)
    allow_pickup: false # If the arrow should be able to be picked up by players (Default: false)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
