---
title: copy_item
titleEn: copy_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# copy_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Copies an item from one inventory slot to another

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `copy_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `from_slot` | The source inventory slot index |
| `to_slot` | The destination inventory slot index |

## 配置示例

```yaml
- id: copy_item
  args:
    from_slot: 0 # The source inventory slot index
    to_slot: 1 # The destination inventory slot index
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
