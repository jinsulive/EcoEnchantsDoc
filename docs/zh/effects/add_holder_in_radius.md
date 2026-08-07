---
title: add_holder_in_radius
titleEn: add_holder_in_radius
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_holder_in_radius <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gives a custom holder temporarily for a given period of time. A holder is anything with effects and conditions, in plugins typically a Talisman, Armor Set, etc. You can create custom holders temporarily and give them on a trigger, for example to give permanent effects for a period of time to people around you.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_holder_in_radius` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `effects` | The effects to apply in the temporary holder |
| `conditions` | The conditions for the holder |
| `duration` | The duration, in ticks |
| `radius` | The radius, in blocks |
| `apply-to-self` | If the player should also get the holder |

## 配置示例

```yaml
- id: add_holder_in_radius
  args:
    effects: 
      - id: movement_speed_multiplier
        args:
          multiplier: 1.25
    conditions: []
    duration: 300 # The duration, in ticks
    radius: 5.3 # The radius, in blocks
    apply-to-self: false # If the player should also get the holder (Defaults to false)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
