---
title: give_edprison_economy
titleEn: give_edprison_economy
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_edprison_economy <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 给予玩家 EdPrison 经济。

> **需要依赖：** EdPrison

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_edprison_economy` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | 要给予的经济数量。 |
| `type` | 经济类型 ID。 |

## 配置示例

```yaml
- id: give_edprison_economy
  args:
    amount: 100 # The amount of economy to give
    type: blocks # The ID of the economy type
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
