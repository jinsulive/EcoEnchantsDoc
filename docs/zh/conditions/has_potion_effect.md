---
title: has_potion_effect
titleEn: has_potion_effect
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# has_potion_effect <Badge type="info" text="libreforge" />

> 需要玩家拥有某个激活的药水效果。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_potion_effect` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effect` / `effects`（任一） | Potion Effect List | ✅ | — | — | 要检查的药水效果。 例: `speed, strength` |
| `level` | Integer | — | `1` | — | 所需的最低药水等级（从 1 开始）。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasPotionEffect.kt`）。

- **源码描述**: 当实体拥有指定的激活药水效果时通过。
- **所属分类**: `player`

## 配置示例

```yaml
- id: has_potion_effect
  args:
    effect: blindness # The potion effect
    effects: # You can also specify a list of potion effects
      - haste
      - speed
      - blindness
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
