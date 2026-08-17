---
title: autosmelt
titleEn: autosmelt
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# autosmelt <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 自动熔炼掉落物（需要掉落触发器）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `autosmelt` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `drop_xp` | Boolean | ✅ | — | — | 是否在熔炼物品的同时掉落熔炼经验值（XP）。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAutosmelt.kt`）。

- **源码描述**: 挖掘方块时自动熔炼，将掉落物转化为熔炉产物。
- **所属分类**: `world`, `inventory`

## 配置示例

```yaml
- id: autosmelt
  args:
    drop_xp: true # If the furnace xp should be dropped
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
