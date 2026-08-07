---
title: add_durability
titleEn: add_durability
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_durability <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Increase the max durability of an item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_durability` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `durability` | The durability to add (or subtract) |

## 配置示例

```yaml
- id: add_durability
  args:
    durability: 100 # The durability to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
