---
title: shear
titleEn: shear
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# shear <Badge type="info" text="libreforge" /> 

> 当玩家对实体或方块使用剪刀时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shear` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 掉落的物品数量 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerShear.kt`）。

- **源码描述**: Fires when the player shears an entity or a block.
- **所属分类**: `interaction`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `BLOCK`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **值**: The number of items dropped.

## 配置示例

```yaml
triggers:
  - shear
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 掉落的物品数量 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
