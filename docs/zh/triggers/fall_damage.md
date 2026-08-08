---
title: fall_damage
titleEn: fall_damage
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# fall_damage <Badge type="info" text="libreforge" /> 

> 当受到坠落伤害时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `fall_damage` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 受到的伤害 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerFallDamage.kt`）。

- **源码描述**: 当实体受到坠落伤害时触发。
- **所属分类**: `combat`, `movement`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `VALUE`
- **值**: 受到的坠落伤害。

## 配置示例

```yaml
triggers:
  - fall_damage
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 受到的伤害 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
