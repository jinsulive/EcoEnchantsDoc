---
title: apply_random_enchant
titleEn: apply_random_enchant
category: effects
subcategory: inventory
tags:
  - libreforge
outline: deep
---

# apply_random_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 向触发物品应用一个随机附魔。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `apply_random_enchant` |
| 所属模块 | libreforge |
| 分类 | Inventory |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `types` | String List | — | `[]` | — | If not empty, only enchantments belonging to these enchantment types can be chosen. |
| `rarities` | String List | — | `[]` | — | If not empty, only enchantments with these rarities can be chosen. |
| `enchants` | Enchantment List | — | `[]` | — | If not empty, only enchantments with these IDs can be chosen. |
| `allow_unsafe` | Boolean | — | `false` | — | If true, enchantments that wouldn't normally be allowed on the item |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`EcoEnchants/eco-core/core-plugin/src/main/kotlin/com/willfp/ecoenchants/libreforge/EffectApplyRandomEnchant.kt`）。

- **源码描述**: 向触发物品应用一个随机附魔。

- **所属分类**: `inventory`

## 配置示例

```yaml
- id: apply_random_enchant
  args:
    types: <value>
    rarities: <value>
    enchants: <value>
    allow_unsafe: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
