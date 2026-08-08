---
title: alt_click
titleEn: alt_click
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# alt_click <Badge type="info" text="libreforge" /> 

> Triggered when using Right Click on most items, Left Click on those that have a default right click functionality

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `alt_click` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerAltClick.kt`）。

- **源码描述**: Fires when the player right-clicks with an item in hand, or left-clicks with a bow, rod, or trident.
- **所属分类**: `interaction`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `BLOCK`, `EVENT`, `LOCATION`, `ITEM`

## 配置示例

```yaml
triggers:
  - alt_click
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
