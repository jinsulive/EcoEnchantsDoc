---
title: remove_item_data
titleEn: remove_item_data
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_item_data <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Remove item data

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_item_data` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `key` | String | ✅ | — | — | The key to remove \| Source: The key of the custom item data entry to remove. Example: `custom_id` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveItemData.kt`）。

- **源码描述**: Removes a custom persistent data entry from the triggering item by its key.
- **所属分类**: `inventory`
- **需要触发器数据**: `ITEM`

## 配置示例

```yaml
- id: remove_item_data
  args:
    key: owner # The key to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
