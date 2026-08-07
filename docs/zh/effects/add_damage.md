---
title: add_damage
titleEn: add_damage
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# add_damage <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Adds incoming or outgoing damage from any damage trigger

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_damage` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `damage` | The damage to add (or subtract) |

## 配置示例

```yaml
- id: add_damage
  args:
    damage: 2 # The damage to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
