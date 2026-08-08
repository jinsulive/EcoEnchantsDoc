---
title: shuffle_hotbar
titleEn: shuffle_hotbar
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# shuffle_hotbar <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Shuffle your victim's hotbar

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shuffle_hotbar` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectShuffleHotbar.kt`）。

- **源码描述**: Randomly shuffles the items in the victim's hotbar.
- **所属分类**: `inventory`, `player`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: shuffle_hotbar
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
