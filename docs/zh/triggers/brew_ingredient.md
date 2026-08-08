---
title: brew_ingredient
titleEn: brew_ingredient
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# brew_ingredient <Badge type="info" text="libreforge" /> 

> 与酿造相同，但将原料作为物品传递。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `brew_ingredient` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBrewIngredient.kt`）。

- **源码描述**: 当酿造台的原料完成酿造时触发。
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`, `LOCATION`, `ITEM`, `VALUE`
- **值**: 酿造的药水数量。

## 配置示例

```yaml
triggers:
  - brew_ingredient
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
