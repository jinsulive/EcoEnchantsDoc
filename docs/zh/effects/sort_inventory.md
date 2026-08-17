---
title: sort_inventory
titleEn: sort_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# sort_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 按物品类型字母顺序对玩家背包的某一区域进行排序。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `sort_inventory` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | `all`, `hotbar`, `main` | Which section of the inventory to sort: all, hotbar, or main. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSortInventory.kt`）。

- **源码描述**: 按材料名和堆叠数量排序玩家背包中的物品。
- **所属分类**: `inventory`, `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: sort_inventory
  args:
    type: main # The section to sort: all, hotbar, or main
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
