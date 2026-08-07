---
title: clear_inventory
titleEn: clear_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# clear_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Clears a section of the player's inventory

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `clear_inventory` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | The section to clear: all, hotbar, main, or armor |

## 配置示例

```yaml
- id: clear_inventory
  args:
    type: all # The section to clear: all, hotbar, main, or armor
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
