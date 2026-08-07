---
title: add_permanent_holder_in_radius
titleEn: add_permanent_holder_in_radius
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_permanent_holder_in_radius <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Gives a custom holder to people within a certain radius of you. A holder is anything with effects and conditions, in plugins typically a Talisman, Armor Set, etc.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_permanent_holder_in_radius` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `effects` | The effects to apply in the temporary holder |
| `conditions` | The conditions for the holder |
| `radius` | The radius, in blocks |
| `apply-to-self` | If the player should also get the holder |

## 配置示例

```yaml
- id: add_permanent_holder_in_radius
  args:
    effects: 
      - id: multiply_all_stats
        args:
          multiplier: 1.05
    conditions: []
    radius: 5.3 # The radius, in blocks
    apply-to-self: false # If the player should also get the holder (Defaults to false)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
