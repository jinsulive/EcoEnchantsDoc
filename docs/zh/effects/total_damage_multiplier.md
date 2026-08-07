---
title: total_damage_multiplier
titleEn: total_damage_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# total_damage_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiplies all incoming or outgoing damage from any damage trigger

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `total_damage_multiplier` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier |

## 配置示例

```yaml
- id: total_damage_multiplier
  args:
    multiplier: 0.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
