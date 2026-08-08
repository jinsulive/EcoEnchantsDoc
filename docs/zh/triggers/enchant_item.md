---
title: enchant_item
titleEn: enchant_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# enchant_item <Badge type="info" text="libreforge" /> 

> 当在附魔台附魔物品时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `enchant_item` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 消耗的经验值 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEnchantItem.kt`）。

- **源码描述**: 当玩家在附魔台附魔物品时触发。
- **所属分类**: `inventory`
- **需要触发器数据**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **值**: 附魔消耗的经验等级。

## 配置示例

```yaml
triggers:
  - enchant_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 消耗的经验值 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
