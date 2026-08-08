---
title: damage_item
titleEn: damage_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# damage_item <Badge type="info" text="libreforge" /> 

> Triggered when damaging an item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_item` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The damage |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerDamageItem.kt`）。

- **源码描述**: Fires when the player's held item takes durability damage.
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **值**: The amount of durability damage applied.

## 配置示例

```yaml
triggers:
  - damage_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The damage |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
