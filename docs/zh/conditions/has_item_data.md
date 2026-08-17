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

> 需要物品上存在某个数据值。

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

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `key` | String | ✅ | — | — | The item data key to check for. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasItemData.kt`）。

- **源码描述**: 当手持物品设置了指定的自定义物品数据键时通过。
- **所属分类**: `inventory`

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
