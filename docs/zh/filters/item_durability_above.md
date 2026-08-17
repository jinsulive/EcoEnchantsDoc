---
title: item_durability_above
titleEn: item_durability_above
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# item_durability_above <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当手持物品的剩余耐久大于或等于给定数值时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_durability_above` |
| 所属模块 | libreforge |
| 分类 | Inventory |
| 取值类型 | `int` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  item_durability_above: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_item_durability_above`）：

```yaml
filters:
  not_item_durability_above: <value>
```

> **取值说明**：耐久值（int，支持表达式）

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterItemDurabilityAbove.kt`）。

- **源码描述**: 当手持物品的剩余耐久大于或等于给定数值时匹配。

- **所属分类**: `inventory`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
