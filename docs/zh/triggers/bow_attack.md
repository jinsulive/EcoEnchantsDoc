---
title: bow_attack
titleEn: bow_attack
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# bow_attack <Badge type="info" text="libreforge" /> 

> 当用弓（或弩）射中实体时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `bow_attack` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 造成的伤害 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBowAttack.kt`）。

- **源码描述**: 当玩家用箭矢命中实体时触发。
- **所属分类**: `combat`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `PROJECTILE`, `VELOCITY`, `VALUE`
- **值**: 造成的伤害。

## 配置示例

```yaml
triggers:
  - bow_attack
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
