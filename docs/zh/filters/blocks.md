---
title: blocks
titleEn: blocks
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# blocks <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当方块类型在给定列表中时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `blocks` |
| 所属模块 | libreforge |
| 分类 | World |
| 取值类型 | `block[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  blocks: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_blocks`）：

```yaml
filters:
  not_blocks: <value>
```

::: warning ⚠️ 目标缺失行为

当触发器数据中缺少目标时，该过滤器会自动通过（例如无 victim 时 `entities` 过滤器直接放行；无方块时 `blocks` 直接放行）。若需**仅**命中方块，请使用自定义 `hit_block` 过滤器。

:::

> 💡 完整 `Material` 取值列表见[枚举值速查表](../reference/enums/material)。

> **取值说明**：方块列表 → `Material` 枚举（见附录），如 `[STONE, DIRT]`

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterBlocks.kt`）。

- **源码描述**: 当方块类型在给定列表中时匹配。

- **所属分类**: `world`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
