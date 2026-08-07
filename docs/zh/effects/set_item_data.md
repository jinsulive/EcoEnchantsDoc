---
title: set_item_data
titleEn: set_item_data
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_item_data <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Set item data

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_item_data` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `key` | The key to set |
| `value` | The value to set it to |

## 配置示例

```yaml
- id: set_item_data
  args:
    key: owner # The key to set
    value: "%player_uuid%" # The value to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
