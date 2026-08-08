---
title: clear_inventory
titleEn: clear_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# clear_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 清空玩家背包的某一区域。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `clear_inventory` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | `all`, `hotbar`, `main`, `armor` | 要清空的背包区域：all、hotbar、main 或 armor。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectClearInventory.kt`）。

- **源码描述**: 清空玩家背包的某一区域。
- **所属分类**: `inventory`, `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: clear_inventory
  args:
    type: all # The section to clear: all, hotbar, main, or armor
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
