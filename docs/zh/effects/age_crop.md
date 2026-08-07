---
title: age_crop
titleEn: age_crop
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# age_crop <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> If the block is a crop, age it by a certain amount

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `age_crop` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `age` | The amount to age by |

## 配置示例

```yaml
- id: age_crop
  args:
    age: 2 # (Optional) The amount to age by
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
