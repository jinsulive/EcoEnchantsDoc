---
title: kill
titleEn: kill
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# kill <Badge type="info" text="libreforge" /> 

> Triggered when a player kills a player or entity

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `kill` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The victim's max health |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerKill.kt`）。

- **源码描述**: Fires when the player kills an entity.
- **所属分类**: `combat`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `LOCATION`, `ITEM`, `VALUE`
- **值**: The maximum health of the killed entity.

## 配置示例

```yaml
triggers:
  - kill
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The victim's max health |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
