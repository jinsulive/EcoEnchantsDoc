---
title: smelt
titleEn: smelt
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# smelt <Badge type="info" text="libreforge" /> 

> Triggered when smelting an item in a furnace

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `smelt` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The amount of items smelted |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerSmelt.kt`）。

- **源码描述**: Fires when the player smelts an item in a furnace.
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`, `LOCATION`, `ITEM`, `VALUE`
- **值**: The number of items produced.

## 配置示例

```yaml
triggers:
  - smelt
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The amount of items smelted |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
