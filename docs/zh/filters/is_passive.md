---
title: is_passive
titleEn: is_passive
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# is_passive <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当受害者（是否）为被动生物时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `is_passive` |
| 所属模块 | libreforge |
| 分类 | Entity |
| 取值类型 | `boolean` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  is_passive: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_is_passive`）：

```yaml
filters:
  not_is_passive: <value>
```

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterIsPassive.kt`）。

- **源码描述**: 当受害者（是否）为被动生物时匹配。

- **所属分类**: `entity`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
