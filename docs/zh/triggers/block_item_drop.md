---
title: block_item_drop
titleEn: block_item_drop
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# block_item_drop <Badge type="info" text="libreforge" /> 

> Triggered when a mined block drops loot

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `block_item_drop` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The amount of items dropped |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBlockItemDrop.kt`）。

- **源码描述**: Fires when a block broken by the player drops its items.
- **所属分类**: `world`
- **需要触发器数据**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **值**: The total number of items dropped.

## 配置示例

```yaml
triggers:
  - block_item_drop
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The amount of items dropped |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
