---
title: move
titleEn: move
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# move <Badge type="info" text="libreforge" /> 

> Triggered on all movement: looking around, walking

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `move` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The distance moved |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMove.kt`）。

- **源码描述**: Fires when the player or a living entity moves to a new block.
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`, `EVENT`, `LOCATION`, `VELOCITY`, `ITEM`, `VALUE`
- **值**: The distance moved.

## 配置示例

```yaml
triggers:
  - move
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The distance moved |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
