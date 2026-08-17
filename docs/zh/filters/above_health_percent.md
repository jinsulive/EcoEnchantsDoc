---
title: above_health_percent
titleEn: above_health_percent
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# above_health_percent <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当受害者的当前生命值百分比大于或等于给定值时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `above_health_percent` |
| 所属模块 | libreforge |
| 分类 | Entity, Combat |
| 取值类型 | `double` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  above_health_percent: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_above_health_percent`）：

```yaml
filters:
  not_above_health_percent: <value>
```

> **取值说明**：百分比 0–100（支持表达式）

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterAboveHealthPercent.kt`）。

- **源码描述**: 当受害者的当前生命值百分比大于或等于给定值时匹配。

- **所属分类**: `entity, combat`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
