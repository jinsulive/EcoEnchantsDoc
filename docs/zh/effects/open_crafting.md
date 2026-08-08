---
title: open_crafting
titleEn: open_crafting
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# open_crafting <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 为玩家打开工作台。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `open_crafting` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectOpenCrafting.kt`）。

- **源码描述**: 为玩家打开虚拟工作台 GUI。
- **所属分类**: `player`, `inventory`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: open_crafting
...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
