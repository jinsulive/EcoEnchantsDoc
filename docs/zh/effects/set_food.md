---
title: set_food
titleEn: set_food
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_food <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Sets the player's food

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_food` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The food level to set |

## 配置示例

```yaml
- id: set_food
  args:
    amount: 1 # The food level to set
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
