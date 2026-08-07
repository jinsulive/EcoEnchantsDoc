---
title: sort_inventory
titleEn: sort_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# sort_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Sorts a section of the player's inventory alphabetically by item type

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `sort_inventory` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | The section to sort: all, hotbar, or main |

## 配置示例

```yaml
- id: sort_inventory
  args:
    type: main # The section to sort: all, hotbar, or main
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
