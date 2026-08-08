---
title: trident_hit
titleEn: trident_hit
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# trident_hit <Badge type="info" text="libreforge" /> 

> Triggered when hitting a block or an entity with a thrown trident

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `trident_hit` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerTridentHit.kt`）。

- **源码描述**: Fires when the player's thrown trident hits a block or entity.
- **所属分类**: `combat`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `BLOCK`, `EVENT`, `LOCATION`, `PROJECTILE`, `VELOCITY`

## 配置示例

```yaml
triggers:
  - trident_hit
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
