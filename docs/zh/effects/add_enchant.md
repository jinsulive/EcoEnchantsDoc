---
title: add_enchant
titleEn: add_enchant
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 为物品添加附魔。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_enchant` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `enchant` | Enchantment | ✅ | — | — | 要添加的附魔 ID（例如 sharpness）。 |
| `level` | Expression(数学表达式) | ✅ | — | — | 要添加的附魔等级。支持表达式。示例：`%level% + 1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddEnchant.kt`）。

- **源码描述**: 为触发物品添加附魔。
- **所属分类**: `inventory`
- **需要触发器数据**: `ITEM`

## 配置示例

```yaml
- id: add_enchant
  args:
    enchant: razor # The ID of the enchant
    level: 2 # The level of the enchant
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
