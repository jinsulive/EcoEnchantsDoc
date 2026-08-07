---
title: remove_item
titleEn: remove_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Removes an item from the player's inventory

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `item` | The item to remove |

## 配置示例

```yaml
- id: remove_item
  args:
    item: diamond # The item to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
