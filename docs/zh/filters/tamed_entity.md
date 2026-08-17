---
title: tamed_entity
titleEn: tamed_entity
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# tamed_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当受害者是给定类型之一的驯服实体时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `tamed_entity` |
| 所属模块 | libreforge |
| 分类 | Entity |
| 取值类型 | `entity[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  tamed_entity: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_tamed_entity`）：

```yaml
filters:
  not_tamed_entity: <value>
```

> 💡 完整 `EntityType` 取值列表见[枚举值速查表](../reference/enums#entitytype)。

> **取值说明**：驯服实体类型 → `EntityType` 枚举

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterTamedEntity.kt`）。

- **源码描述**: 当受害者是给定类型之一的驯服实体时匹配。

- **所属分类**: `entity`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
