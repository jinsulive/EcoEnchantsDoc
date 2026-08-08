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

> Requires a player to have a potion effect active

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
| `effect` | Potion Effect List | ✅ | — | — | The potion effect \| Source: The potion effect(s) to check for. Example: `speed, strength` |
| `effects` | Potion Effect List | ✅ | — | — | You can also specify a list of potion effects \| Source: The potion effect(s) to check for. Example: `speed, strength` |
| `level` | Integer | — | `1` | — | The minimum amplifier level required (1-based). |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasPotionEffect.kt`）。

- **源码描述**: Passes when the entity has the specified potion effect active.
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
