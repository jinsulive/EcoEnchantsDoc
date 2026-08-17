---
title: text_contains
titleEn: text_contains
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# text_contains <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当触发文本包含给定的子串之一时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `text_contains` |
| 所属模块 | libreforge |
| 分类 | Meta |
| 取值类型 | `string[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  text_contains: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_text_contains`）：

```yaml
filters:
  not_text_contains: <value>
```

> **取值说明**：子串列表（包含匹配）

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterTextContains.kt`）。

- **源码描述**: 当触发文本包含给定的子串之一时匹配。

- **所属分类**: `meta`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
