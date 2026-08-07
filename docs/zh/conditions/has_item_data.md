---
title: has_item_data
titleEn: has_item_data
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_item_data <Badge type="info" text="libreforge" />

> Requires an item to have a certain data value present on it

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_item_data` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `key` | The data key |

## 配置示例

```yaml
- id: has_item_data
  args:
    key: owner # The data key
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
