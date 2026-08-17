---
title: player_name
titleEn: player_name
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# player_name <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当玩家名称在给定列表中时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `player_name` |
| 所属模块 | libreforge |
| 分类 | Player |
| 取值类型 | `string[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  player_name: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_player_name`）：

```yaml
filters:
  not_player_name: <value>
```

> **取值说明**：玩家名列表（精确匹配）

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterPlayerName.kt`）。

- **源码描述**: 当玩家名称在给定列表中时匹配。

- **所属分类**: `player`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
