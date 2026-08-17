---
title: set_edprison_economy
titleEn: set_edprison_economy
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_edprison_economy <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置玩家的 EdPrison 经济。

> **需要依赖：** EdPrison

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_edprison_economy` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The EdPrison economy currency ID to set. |
| `amount` | Expression | ✅ | — | — | The value to set the economy balance to. Supports expressions. |

## 配置示例

```yaml
- id: set_edprison_economy
  args:
    type: blocks # the ID of the economy type
    amount: 100 # The amount to set
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
