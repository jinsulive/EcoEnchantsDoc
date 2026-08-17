---
title: enchant
titleEn: enchant
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当正在应用的附魔之一与给定的附魔 ID 匹配时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `enchant` |
| 所属模块 | libreforge |
| 分类 | Inventory |
| 取值类型 | `enchantment[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  enchant: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_enchant`）：

```yaml
filters:
  not_enchant: <value>
```

> 💡 完整 `Enchantment` 取值列表见[枚举值速查表](../reference/enums/enchantment)。

> **取值说明**：附魔 key 列表，如 `sharpness`（内部转大写）

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterEnchant.kt`）。

- **源码描述**: 当正在应用的附魔之一与给定的附魔 ID 匹配时匹配。

- **所属分类**: `inventory`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
