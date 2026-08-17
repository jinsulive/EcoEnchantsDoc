---
title: set_item_data
titleEn: set_item_data
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_item_data <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置物品数据。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_item_data` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `key` | String | ✅ | — | — | 要在物品上设置的自定义数据键。 例: `custom_id` |
| `value` | String | ✅ | — | — | 要存储在给定键下的值。 例: `epic_sword_tier_3` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetItemData.kt`）。

- **源码描述**: 将触发物品上的自定义数据键设置为指定值。
- **所属分类**: `inventory`
- **需要触发器数据**: `ITEM`

## 配置示例

```yaml
- id: set_item_data
  args:
    key: owner # The key to set
    value: "%player_uuid%" # The value to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
