---
title: remove_potion_effect
titleEn: remove_potion_effect
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# remove_potion_effect <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 移除药水效果。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_potion_effect` |
| 所属模块 | libreforge |
| 分类 | 药水（Potion） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effect` | Any/Custom | ✅ | — | — | 要移除的效果。 |
| `apply_to_player` | Custom | — | — | — | 为 true 时移除玩家身上的效果，为 false 时移除受害者身上的效果。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemovePotionEffect.kt`）。

- **源码描述**: 从玩家或受害者身上移除指定的药水效果。
- **所属分类**: `potion`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: remove_potion_effect
  args:
    effect: hunger # The effect to remove (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
    apply_to_player: true # True to remove the effect from the player, false to remove it from the victim
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
