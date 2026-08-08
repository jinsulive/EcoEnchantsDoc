---
title: lose_hunger
titleEn: lose_hunger
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# lose_hunger <Badge type="info" text="libreforge" /> 

> Triggered when losing hunger

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `lose_hunger` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The hunger lost |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerLoseHunger.kt`）。

- **源码描述**: Fires when the player's food level decreases.
- **所属分类**: `player`
- **需要触发器数据**: `PLAYER`, `EVENT`, `VALUE`
- **值**: The amount of food level lost.

## 配置示例

```yaml
triggers:
  - lose_hunger
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The hunger lost |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
