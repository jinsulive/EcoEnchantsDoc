---
title: entity_damage_by_entity
titleEn: entity_damage_by_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_damage_by_entity <Badge type="info" text="libreforge" /> 

> 当实体受到另一个实体的伤害时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `entity_damage_by_entity` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 受到的伤害 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityDamageByEntity.kt`）。

- **源码描述**: 当实体被另一个实体伤害时触发。
- **所属分类**: `entity`
- **需要触发器数据**: `VICTIM`, `LOCATION`, `VALUE`
- **值**: 造成的伤害。

## 配置示例

```yaml
triggers:
  - entity_damage_by_entity
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
