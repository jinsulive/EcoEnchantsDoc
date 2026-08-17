---
title: is_expression_true
titleEn: is_expression_true
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# is_expression_true <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当给定的数学表达式计算结果大于零时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `is_expression_true` |
| 所属模块 | libreforge |
| 分类 | Meta |
| 取值类型 | `expression` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  is_expression_true: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_is_expression_true`）：

```yaml
filters:
  not_is_expression_true: <value>
```

> **取值说明**：数学表达式，>0 时通过，如 `%level% > 2`

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterIsExpressionTrue.kt`）。

- **源码描述**: 当给定的数学表达式计算结果大于零时匹配。

- **所属分类**: `meta`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
