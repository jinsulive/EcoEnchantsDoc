---
title: take_damage
titleEn: take_damage
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# take_damage <Badge type="info" text="libreforge" /> 

> Triggered when taking damage from any source

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `take_damage` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The damage taken |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerTakeDamage.kt`）。

- **源码描述**: Fires when the player takes any damage.
- **所属分类**: `combat`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`, `VALUE`
- **值**: The final damage taken.

## 配置示例

```yaml
triggers:
  - take_damage
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The damage taken |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
