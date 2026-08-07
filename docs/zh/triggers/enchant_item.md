---
title: enchant_item
titleEn: enchant_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# enchant_item <Badge type="info" text="libreforge" /> 

> Triggered when enchanting an item in an enchanting table

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `enchant_item` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The xp cost |

## 配置示例

```yaml
triggers:
  - enchant_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The xp cost |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
