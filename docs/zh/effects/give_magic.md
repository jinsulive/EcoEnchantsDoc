---
title: give_magic
titleEn: give_magic
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# give_magic <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 增加/扣除魔力。

> **需要依赖：** EcoSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_magic` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | 要增加/扣除的点数类型。 |
| `amount` | 要增加/扣除的数量。 |

## 配置示例

```yaml
- id: give_magic
  args:
    type: mana # The point to add/subtract
    amount: 15 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
