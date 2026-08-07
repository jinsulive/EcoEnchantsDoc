---
title: brew_ingredient
titleEn: brew_ingredient
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# brew_ingredient <Badge type="info" text="libreforge" /> 

> Same as brew, but passes the ingredient as the item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `brew_ingredient` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 配置示例

```yaml
triggers:
  - brew_ingredient
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
