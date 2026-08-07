---
title: damage_armor
titleEn: damage_armor
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_armor <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Damage a victim's armor

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_armor` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `damage` | The amount of damage to deal |

## 配置示例

```yaml
- id: damage_armor
  args:
    damage: 1 # The amount of damage to deal
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
