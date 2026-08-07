---
title: item_data_equals
titleEn: item_data_equals
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_data_equals <Badge type="info" text="libreforge" />

> Requires an item to have a certain data value

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_data_equals` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `key` | The data key |
| `value` | The data value |

## 配置示例

```yaml
- id: item_data_equals
  args:
    key: owner # The data key
    value: "%player_uuid%" # The data value
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
