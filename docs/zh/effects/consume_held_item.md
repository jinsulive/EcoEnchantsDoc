---
title: consume_held_item
titleEn: consume_held_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# consume_held_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Consume items held in the player's main hand

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `consume_held_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of items to remove (i.e. 1 apple, 2 apples, etc) |

## 配置示例

```yaml
- id: consume_held_item
  args:
    amount: 1 # The amount of items to remove (i.e. 1 apple, 2 apples, etc)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
