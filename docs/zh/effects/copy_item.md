---
title: copy_item
titleEn: copy_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# copy_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将物品从一个背包栏位复制到另一个栏位。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `copy_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `from_slot` | String | ✅ | — | — | 要从中复制物品的槽位，例如 mainhand 或 offhand。 例: `mainhand` |
| `to_slot` | String | ✅ | — | — | 要复制物品到的槽位。 例: `offhand` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCopyItem.kt`）。

- **源码描述**: 将物品从一个背包栏位复制到另一个栏位。
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: copy_item
  args:
    from_slot: 0 # The source inventory slot index
    to_slot: 1 # The destination inventory slot index
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
