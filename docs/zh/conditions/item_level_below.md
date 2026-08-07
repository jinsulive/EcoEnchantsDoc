---
title: item_level_below
titleEn: item_level_below
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_level_below <Badge type="info" text="libreforge" />

> Requires an item to be below a certain level

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_level_below` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `id` | The level ID |
| `level` | The maximum level |

## 配置示例

```yaml
- id: item_level_below
  args:
    id: mining_progress # The level ID
    level: 5 # The maximum level
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
