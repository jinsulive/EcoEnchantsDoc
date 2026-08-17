---
title: value_equals
titleEn: value_equals
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# value_equals <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当触发器数值（VALUE）等于给定数值时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `value_equals` |
| 所属模块 | libreforge |
| 分类 | Value |
| 取值类型 | `double` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  value_equals: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_value_equals`）：

```yaml
filters:
  not_value_equals: <value>
```

> **取值说明**：数值（支持表达式），比较触发器的 VALUE

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterValueEquals.kt`）。

- **源码描述**: 当触发器数值（VALUE）等于给定数值时匹配。

- **所属分类**: `value`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
