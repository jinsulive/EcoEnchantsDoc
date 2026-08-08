---
title: open_ender_chest
titleEn: open_ender_chest
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# open_ender_chest <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Opens the player's ender chest

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `open_ender_chest` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectOpenEnderChest.kt`）。

- **源码描述**: Opens the player's ender chest inventory.
- **所属分类**: `player`, `inventory`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: open_ender_chest
...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
