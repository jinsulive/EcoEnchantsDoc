---
title: tier_up_collection
titleEn: tier_up_collection
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecocollections
outline: deep
---

# tier_up_collection <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoCollections" />

> Triggered when tiering up a collection

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `tier_up_collection` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | The new tier |
| 需要 | EcoCollections |

## 配置示例

```yaml
triggers:
  - tier_up_collection
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The new tier |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
