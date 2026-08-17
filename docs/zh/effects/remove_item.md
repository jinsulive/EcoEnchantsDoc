---
title: remove_item
titleEn: remove_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 从玩家背包中移除物品。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `item` | Item | ✅ | — | — | 要从玩家背包移除的物品（包括其堆叠数量）。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveItem.kt`）。

- **源码描述**: 从玩家背包移除指定物品（及其堆叠数量）。
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: remove_item
  args:
    item: diamond # The item to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
