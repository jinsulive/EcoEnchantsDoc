---
title: items
titleEn: items
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# items <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当手持物品与给定的物品类型之一匹配时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `items` |
| 所属模块 | libreforge |
| 分类 | Inventory |
| 取值类型 | `item[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  items: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_items`）：

```yaml
filters:
  not_items: <value>
```

> 💡 完整 `Material` 取值列表见[枚举值速查表](../reference/enums/material)。

> **取值说明**：物品 id/名称列表（eco Items 解析），如 `[DIAMOND_SWORD]` 或 `[minecraft:diamond_sword]`

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterItems.kt`）。

- **源码描述**: 当手持物品与给定的物品类型之一匹配时匹配。

- **所属分类**: `inventory`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
