---
title: entity_xp_drop
titleEn: entity_xp_drop
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_xp_drop <Badge type="info" text="libreforge" /> 

> 当玩家击杀的实体掉落经验值时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `entity_xp_drop` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 掉落的经验值数量 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityXpDrop.kt`）。

- **源码描述**: 当被玩家击杀的实体掉落经验时触发。
- **所属分类**: `combat`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `VALUE`
- **值**: 掉落的经验值数量。

## 配置示例

```yaml
triggers:
  - entity_xp_drop
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 掉落的经验值数量 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
