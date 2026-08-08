---
title: pick_up_item
titleEn: pick_up_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# pick_up_item <Badge type="info" text="libreforge" /> 

> Triggered when picking up an item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `pick_up_item` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The amount of items |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerPickUpItem.kt`）。

- **源码描述**: Fires when an entity picks up an item from the ground.
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `ITEM`, `VALUE`
- **值**: The stack size of the picked-up item.

## 配置示例

```yaml
triggers:
  - pick_up_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The amount of items |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
