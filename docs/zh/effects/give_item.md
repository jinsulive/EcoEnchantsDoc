---
title: give_item
titleEn: give_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# give_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gives a player an item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `item` | The item to give |
| `items` | You can also specify a list of items |
| `slot` | The slot to give in, can be any numeric slot, hand, or 'any' |

## 配置示例

```yaml
- id: give_item
  args:
    item: "diamond_sword razor:5" # The item to give
    items: # You can also specify a list of items
      - "ecoitems:enchanted_diamond 1"
      - "diamond_pickaxe 1 unbreaking:2"
    slot: hand # (Optional) The slot to give in, can be any numeric slot, hand, or 'any' (Defaults to any)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
