---
title: close_inventory
titleEn: close_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# close_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Closes the player's inventory

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `close_inventory` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCloseInventory.kt`）。

- **源码描述**: Closes any open inventory GUI for the player.
- **所属分类**: `inventory`, `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: close_inventory
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
