---
title: buy_item
titleEn: buy_item
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoshop
outline: deep
---

# buy_item <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoShop" />

> 当在商店购买物品时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `buy_item` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | 价格 |
| 需要 | EcoShop |

## 配置示例

```yaml
triggers:
  - buy_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 价格 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
