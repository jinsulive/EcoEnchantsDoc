---
title: multiply_magic
titleEn: multiply_magic
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_magic <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiply magic

> **需要依赖：** EcoSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_magic` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | The magic type to multiply |
| `multiplier` | The amount to multiply it by |

## 配置示例

```yaml
- id: multiply_magic
  args:
    type: magic # The magic type to multiply
    multiplier: 0.5 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
