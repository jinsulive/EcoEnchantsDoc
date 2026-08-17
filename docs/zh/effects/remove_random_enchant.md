---
title: remove_random_enchant
titleEn: remove_random_enchant
category: effects
subcategory: inventory
tags:
  - libreforge
outline: deep
---

# remove_random_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 从触发物品上移除一个随机选择的附魔。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_random_enchant` |
| 所属模块 | libreforge |
| 分类 | Inventory |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `mode` | String | — | `full` | `full`, `level` | 设置为 'level' 可将附魔等级减 1，而非完全移除附魔。默认为移除附魔。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveRandomEnchant.kt`）。

- **源码描述**: 从触发物品上移除一个随机选择的附魔。

- **所属分类**: `inventory`

## 配置示例

```yaml
- id: remove_random_enchant
  args:
    mode: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
