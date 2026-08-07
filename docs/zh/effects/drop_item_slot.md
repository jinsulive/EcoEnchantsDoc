---
title: drop_item_slot
titleEn: drop_item_slot
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_item_slot <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Drops items from the player's inventory

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drop_item_slot` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `slot` | The slot to drop, can be any numeric slot, hand, or 'any' |
| `amount` | The amount of items to drop, defaults to full stack |

## 配置示例

```yaml
- id: drop_item_slot
  args:
    slot: hand # The slot to drop, can be any numeric slot, hand, or 'any' (Defaults to any)
    amount: 1 # (Optional) The amount of items to drop, defaults to full stack
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
