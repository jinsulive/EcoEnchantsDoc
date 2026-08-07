---
title: give_oxygen
titleEn: give_oxygen
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_oxygen <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Give a player oxygen

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_oxygen` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of oxygen to give (supports negative values) |

## 配置示例

```yaml
- id: give_oxygen
  args:
    amount: 1 # The amount of oxygen to give (supports negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
