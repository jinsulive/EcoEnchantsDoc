---
title: projectiles
titleEn: projectiles
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# projectiles <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当弹射物类型与给定的实体类型之一匹配时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `projectiles` |
| 所属模块 | libreforge |
| 分类 | Combat |
| 取值类型 | `entity[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  projectiles: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_projectiles`）：

```yaml
filters:
  not_projectiles: <value>
```

> 💡 完整 `EntityType` 取值列表见[枚举值速查表](../reference/enums#entitytype)。

> **取值说明**：弹射物类型 → `EntityType` 枚举（弹射物子类）

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterProjectiles.kt`）。

- **源码描述**: 当弹射物类型与给定的实体类型之一匹配时匹配。

- **所属分类**: `combat`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
