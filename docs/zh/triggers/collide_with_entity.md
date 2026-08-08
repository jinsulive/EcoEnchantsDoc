---
title: collide_with_entity
titleEn: collide_with_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# collide_with_entity <Badge type="info" text="libreforge" /> 

> Triggered when a player collides with another entity

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `collide_with_entity` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerCollideWithEntity.kt`）。

- **源码描述**: Fires when the player physically collides with a nearby entity.
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `LOCATION`

## 配置示例

```yaml
triggers:
  - collide_with_entity
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
