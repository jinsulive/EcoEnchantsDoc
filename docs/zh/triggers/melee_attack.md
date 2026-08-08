---
title: melee_attack
titleEn: melee_attack
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# melee_attack <Badge type="info" text="libreforge" /> 

> 当使用近战攻击伤害实体时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `melee_attack` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 造成的伤害 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMeleeAttack.kt`）。

- **源码描述**: 当玩家用近战攻击命中实体时触发。
- **所属分类**: `combat`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **值**: 造成的伤害。

## 配置示例

```yaml
triggers:
  - melee_attack
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 造成的伤害 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
