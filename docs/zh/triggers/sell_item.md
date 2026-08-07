---
title: sell_item
titleEn: sell_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# sell_item <Badge type="info" text="libreforge" /> 

> Triggered when selling an item in a shop

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `sell_item` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The price |

## 配置示例

```yaml
triggers:
  - sell_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The price |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
