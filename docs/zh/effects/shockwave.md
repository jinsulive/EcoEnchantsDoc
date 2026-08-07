---
title: shockwave
titleEn: shockwave
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# shockwave <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Emits an expanding shockwave that knocks back and damages nearby entities

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shockwave` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `radius` | The final radius of the shockwave in blocks |
| `pulses` | The number of expansion pulses |
| `damage` | The damage dealt to each entity hit |
| `knockback` | The knockback force applied to hit entities |

## 配置示例

```yaml
- id: shockwave
  args:
    radius: 5 # The final radius of the shockwave in blocks
    pulses: 5 # The number of expansion pulses
    damage: 3.0 # The damage dealt to each entity hit
    knockback: 1.5 # The knockback force applied to hit entities
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
