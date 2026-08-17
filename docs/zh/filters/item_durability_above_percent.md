---
title: item_durability_above_percent
titleEn: item_durability_above_percent
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# item_durability_above_percent <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当手持物品的剩余耐久百分比大于或等于给定值时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_durability_above_percent` |
| 所属模块 | libreforge |
| 分类 | Inventory |
| 取值类型 | `double` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  item_durability_above_percent: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_item_durability_above_percent`）：

```yaml
filters:
  not_item_durability_above_percent: <value>
```

> **取值说明**：耐久百分比 0–100（支持表达式）

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterItemDurabilityAbovePercent.kt`）。

- **源码描述**: 当手持物品的剩余耐久百分比大于或等于给定值时匹配。

- **所属分类**: `inventory`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
