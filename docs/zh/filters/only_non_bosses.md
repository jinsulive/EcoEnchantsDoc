---
title: only_non_bosses
titleEn: only_non_bosses
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# only_non_bosses <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当受害者不是 BOSS 实体时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `only_non_bosses` |
| 所属模块 | libreforge |
| 分类 | Entity |
| 取值类型 | `boolean` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  only_non_bosses: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_only_non_bosses`）：

```yaml
filters:
  not_only_non_bosses: <value>
```

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterOnlyNonBosses.kt`）。

- **源码描述**: 当受害者不是 BOSS 实体时匹配。

- **所属分类**: `entity`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
