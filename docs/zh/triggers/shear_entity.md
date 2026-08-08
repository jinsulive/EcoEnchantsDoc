---
title: shear_entity
titleEn: shear_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# shear_entity <Badge type="info" text="libreforge" /> 

> Triggered when shearing an entity

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shear_entity` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerShearEntity.kt`）。

- **源码描述**: Fires when the player shears a living entity.
- **所属分类**: `interaction`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **值**: The number of items dropped.

## 配置示例

```yaml
triggers:
  - shear_entity
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
