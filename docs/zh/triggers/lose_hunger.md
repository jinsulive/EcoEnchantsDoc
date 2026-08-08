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

> 当饥饿值减少时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `lose_hunger` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 消耗的饥饿值 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerLoseHunger.kt`）。

- **源码描述**: 当玩家的食物值减少时触发。
- **所属分类**: `player`
- **需要触发器数据**: `PLAYER`, `EVENT`, `VALUE`
- **值**: 消耗的食物值数量。

## 配置示例

```yaml
triggers:
  - lose_hunger
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 消耗的饥饿值 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
