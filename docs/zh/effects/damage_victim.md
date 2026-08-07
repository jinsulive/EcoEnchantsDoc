---
title: damage_victim
titleEn: damage_victim
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Damage the victim

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_victim` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `damage` | The damage to deal |
| `use-source` | If the player should be marked as the damager, will trigger melee_damage and run listeners (set to false if you don't know what this means) |
| `true-damage` | If the damage should ignore armor, defense, etc |

## 配置示例

```yaml
- id: damage_victim
  args:
    damage: 10.4 # The damage to deal
    use-source: false # If the player should be marked as the damager, will trigger melee_damage and run listeners: set to false if you don't know what this means
    true-damage: true # (Optional) if the damage should ignore armor, defense, etc
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
