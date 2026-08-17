---
title: consume_held_item
titleEn: consume_held_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# consume_held_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 消耗玩家主手持有的物品。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `consume_held_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | The number of items to remove from the main hand. Supports expressions. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectConsumeHeldItem.kt`）。

- **源码描述**: 从玩家主手移除指定数量的物品。
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: consume_held_item
  args:
    amount: 1 # The amount of items to remove (i.e. 1 apple, 2 apples, etc)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
