---
title: harvest_crop
titleEn: harvest_crop
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# harvest_crop <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Harvests a crop block and resets it to age 0

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `harvest_crop` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `only_fully_grown` | Whether to only harvest fully grown crops |

## 配置示例

```yaml
- id: harvest_crop
  args:
    only_fully_grown: true # Whether to only harvest fully grown crops
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
