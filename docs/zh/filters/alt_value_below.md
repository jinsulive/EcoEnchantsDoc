---
title: alt_value_below
titleEn: alt_value_below
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# alt_value_below <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当触发器的备选值（ALT_VALUE）小于给定数值时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `alt_value_below` |
| 所属模块 | libreforge |
| 分类 | Value |
| 取值类型 | `double` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  alt_value_below: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_alt_value_below`）：

```yaml
filters:
  not_alt_value_below: <value>
```

> **取值说明**：数值（支持表达式），比较触发器的 ALT_VALUE

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterAltValueBelow.kt`）。

- **源码描述**: 当触发器的备选值（ALT_VALUE）小于给定数值时匹配。

- **所属分类**: `value`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
