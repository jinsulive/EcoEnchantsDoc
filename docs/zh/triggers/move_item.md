---
title: move_item
titleEn: move_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# move_item <Badge type="info" text="libreforge" /> 

> 当玩家在背包界面中点击物品时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `move_item` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 被点击物品的堆叠数量 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMoveItem.kt`）。

- **源码描述**: 当玩家在背包中点击物品时触发。
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`, `ITEM`, `VALUE`, `EVENT`
- **值**: 被点击物品的堆叠数量。

## 配置示例

```yaml
triggers:
  - move_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 被点击物品的堆叠数量 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
