---
title: remove_enchant
titleEn: remove_enchant
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 从物品上移除附魔。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_enchant` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `enchant` | Enchantment | ✅ | — | — | 要从物品上移除的附魔。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveEnchant.kt`）。

- **源码描述**: 从触发物品上移除指定附魔。
- **所属分类**: `inventory`
- **需要触发器数据**: `ITEM`

## 配置示例

```yaml
- id: remove_enchant
  args:
    enchant: telekinesis # The ID of the enchant
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
