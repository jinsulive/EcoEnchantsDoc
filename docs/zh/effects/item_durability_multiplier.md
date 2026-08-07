---
title: item_durability_multiplier
titleEn: item_durability_multiplier
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# item_durability_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiplies item durability (only works if holders are items, e.g. in EcoEnchants, EcoItems, etc.). Item durability cannot actually be changed, so this functions like unbreaking where items will instead lose durability more quickly / slowly.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_durability_multiplier` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for the durability |

## 配置示例

```yaml
- id: item_durability_multiplier
  args:
    multiplier: 1.5 # The multiplier for the durability
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
