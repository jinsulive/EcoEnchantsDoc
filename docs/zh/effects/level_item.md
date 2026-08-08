---
title: level_item
titleEn: level_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# level_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 为特定等级获得物品经验值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `level_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `id` | String | ✅ | — | — | 要给予经验值的等级类型 ID。示例：`mining` |
| `xp` | Expression(数学表达式) | ✅ | — | — | 要获得的经验值数量。支持表达式。示例：`%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectLevelItem.kt`）。

- **源码描述**: 为触发物品的等级系统提供经验值。
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: level_item
  args:
    id: mining_progress # The level ID
    xp: "%v% * 2" # The amount of xp to gain
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
