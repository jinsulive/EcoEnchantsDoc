---
title: spawner_entity
titleEn: spawner_entity
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# spawner_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当方块是刷怪笼且其生成类型与给定的实体类型之一匹配时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spawner_entity` |
| 所属模块 | libreforge |
| 分类 | World, Entity |
| 取值类型 | `string[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  spawner_entity: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_spawner_entity`）：

```yaml
filters:
  not_spawner_entity: <value>
```

> 💡 完整 `EntityType` 取值列表见[枚举值速查表](../reference/enums#entitytype)。

> **取值说明**：刷怪笼生成类型 → `EntityType` 枚举

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterSpawnerEntity.kt`）。

- **源码描述**: 当方块是刷怪笼且其生成类型与给定的实体类型之一匹配时匹配。

- **所属分类**: `world, entity`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
