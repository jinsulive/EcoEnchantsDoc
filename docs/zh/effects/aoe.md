---
title: aoe
titleEn: aoe
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# aoe <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Runs effects for all entities within an area of effect (aoe)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `aoe` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `effects` | The effects to run for each entity |
| `shape` | The shape of the AOE area (see above) |
| `radius` | The radius of the cone (see above) |
| `angle` | The angle of the cone (see above) |

## 配置示例

```yaml
- id: aoe
  args:
      effects: # The effects to run for each entity
          - id: damage_victim
            args:
                damage: 2
                true-damage: true
      shape: cone # The shape of the AOE area (see above)
      radius: 3 # The radius of the cone (see above)
      angle: 120 # The angle of the cone (see above)
    ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
