---
title: drop_item
titleEn: drop_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Drops an item at a location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drop_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `item` | The item to give |

## 配置示例

```yaml
- id: drop_item
  args:
    item: "diamond_sword first_strike:6" # The item to give
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
