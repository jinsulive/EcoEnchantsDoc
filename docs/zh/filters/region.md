---
title: region
titleEn: region
category: filters
subcategory: worldguard
tags:
  - libreforge
outline: deep
---

# region <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当事件发生在给定的 WorldGuard 区域 ID 之一中时匹配。

> **需要依赖：** WorldGuard

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `region` |
| 所属模块 | libreforge |
| 分类 | World |
| 取值类型 | `STRING_LIST` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  region: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_region`）：

```yaml
filters:
  not_region: <value>
```

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/worldguard/impl/FilterRegion.kt`）。

- **源码描述**: 当事件发生在给定的 WorldGuard 区域 ID 之一中时匹配。

- **所属分类**: `world`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
