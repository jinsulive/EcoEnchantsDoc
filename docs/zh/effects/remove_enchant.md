---
title: remove_enchant
titleEn: remove_enchant
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Removes an enchant from the item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_enchant` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `enchant` | The ID of the enchant |

## 配置示例

```yaml
- id: remove_enchant
  args:
    enchant: telekinesis # The ID of the enchant
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
