---
title: give_item
titleEn: give_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# give_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 给予玩家物品。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `item` / `items`（任一） | Item List | ✅ | — | — | The item or list of items to give to the player. |
| `slot` | String | — | — | — | The inventory slot type to place the item into. If omitted the item is dropped into the player's inventory via telekinesis. 例: `mainhand` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveItem.kt`）。

- **源码描述**: 给予玩家一个或多个物品，可选放入指定背包栏位。
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_item
  args:
    item: "diamond_sword razor:5" # The item to give
    items: # You can also specify a list of items
      - "ecoitems:enchanted_diamond 1"
      - "diamond_pickaxe 1 unbreaking:2"
    slot: hand # (Optional) The slot to give in, can be any numeric slot, hand, or 'any' (Defaults to any)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
