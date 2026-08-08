---
title: drop_item_slot
titleEn: drop_item_slot
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_item_slot <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 从玩家背包中掉落物品。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drop_item_slot` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `slot` | String | ✅ | — | — | 掉落物品的背包栏位，可以是任意数字栏位、hand 或 'any'。 |
| `amount` | Expression(数学表达式) | — | — | — | 要掉落的物品数量，默认掉落整组。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDropItemSlot.kt`）。

- **源码描述**: 从指定背包栏位掉落物品。
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: drop_item_slot
  args:
    slot: hand # The slot to drop, can be any numeric slot, hand, or 'any' (Defaults to any)
    amount: 1 # (Optional) The amount of items to drop, defaults to full stack
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
