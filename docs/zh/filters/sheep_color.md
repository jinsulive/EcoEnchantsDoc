---
title: sheep_color
titleEn: sheep_color
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# sheep_color <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当受害绵羊的羊毛颜色与给定的颜色之一匹配时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `sheep_color` |
| 所属模块 | libreforge |
| 分类 | Entity |
| 取值类型 | `string[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  sheep_color: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_sheep_color`）：

```yaml
filters:
  not_sheep_color: <value>
```

> 💡 完整 `DyeColor` 取值列表见[枚举值速查表](../reference/enums/dye_color)。

> **取值说明**：羊毛颜色列表 → `DyeColor` 枚举（见附录），如 `[RED, BLUE]`

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterSheepColor.kt`）。

- **源码描述**: 当受害绵羊的羊毛颜色与给定的颜色之一匹配时匹配。

- **所属分类**: `entity`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
