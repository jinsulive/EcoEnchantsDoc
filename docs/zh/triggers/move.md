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

> 当发生任意移动时触发：环顾四周、行走。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `move` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 移动的距离 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMove.kt`）。

- **源码描述**: 当玩家或生物实体移动到新方块时触发。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`, `EVENT`, `LOCATION`, `VELOCITY`, `ITEM`, `VALUE`
- **值**: 移动的距离。

## 配置示例

```yaml
triggers:
  - move
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 移动的距离 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
