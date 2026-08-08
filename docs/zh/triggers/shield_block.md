---
title: shield_block
titleEn: shield_block
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# shield_block <Badge type="info" text="libreforge" /> 

> Triggered when blocking an attack with a shield

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shield_block` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The damage blocked |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerShieldBlock.kt`）。

- **源码描述**: Fires when the player blocks an attack with a shield.
- **所属分类**: `combat`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `VALUE`
- **值**: The amount of damage blocked.

## 配置示例

```yaml
triggers:
  - shield_block
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The damage blocked |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
