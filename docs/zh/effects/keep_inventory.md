---
title: keep_inventory
titleEn: keep_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# keep_inventory <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Gives the player keep inventory. This will not make them keep their XP! Use keep_level as well if you want players to keep both items and XP.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `keep_inventory` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKeepInventory.kt`）。

- **源码描述**: Prevents the player from dropping their inventory on death.
- **所属分类**: `player`, `inventory`

## 配置示例

```yaml
- id: keep_inventory
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
