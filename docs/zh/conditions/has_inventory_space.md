---
title: has_inventory_space
titleEn: has_inventory_space
category: conditions
subcategory: player
tags:
  - libreforge
outline: deep
---

# has_inventory_space <Badge type="info" text="libreforge" /> <Badge type="info" text="条件" />

> 当玩家在检查的槽位类型中至少有一个空槽时通过。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_inventory_space` |
| 所属模块 | libreforge |
| 分类 | Player |
| 组件类型 | 条件 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `include_armor_slots` | Boolean | — | `true` | — | 是否将空的护甲槽位计为可用空间。默认为 true。 |
| `include_offhand` | Boolean | — | `true` | — | 是否将空的副手槽位计为可用空间。默认为 true。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasInventorySpace.kt`）。

- **源码描述**: 当玩家在检查的槽位类型中至少有一个空槽时通过。

- **所属分类**: `player`

## 配置示例

```yaml
- id: has_inventory_space
  args:
    include_armor_slots: <value>
    include_offhand: <value>
```

## 关联页面

- [所有条件](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
