---
title: cauldron_level_change
titleEn: cauldron_level_change
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# cauldron_level_change <Badge type="info" text="libreforge" /> 

> Triggered when a cauldron's water level changes

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `cauldron_level_change` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The new cauldron level |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerCauldronLevelChange.kt`）。

- **源码描述**: Fires when the player changes the water level of a cauldron.
- **所属分类**: `interaction`
- **需要触发器数据**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`, `VALUE`
- **值**: The new water level of the cauldron after the change.

## 配置示例

```yaml
triggers:
  - cauldron_level_change
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The new cauldron level |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
