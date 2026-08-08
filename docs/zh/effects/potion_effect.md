---
title: potion_effect
titleEn: potion_effect
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# potion_effect <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gives a potion effect

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `potion_effect` |
| 所属模块 | libreforge |
| 分类 | 药水（Potion） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effect` | Any/Custom | ✅ | — | — | The effect to give (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html) |
| `level` | Custom | — | — | — | The level to give |
| `duration` | Custom | — | — | — | The duration of the effect (in ticks) |
| `particles` | Custom | — | — | — | (Optional) If the effect should show particles |
| `icon` | Custom | — | — | — | (Optional) If the effect should show the icon in the top corner |
| `apply_to_player` | Custom | — | — | — | True to apply to the player, false to apply to the victim |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPotionEffect.kt`）。

- **源码描述**: Applies a potion effect to the player or victim for a configurable duration and level.
- **所属分类**: `potion`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: potion_effect
  args:
    effect: blindness # The effect to give (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
    level: 1 # The level to give
    duration: 40 # The duration of the effect (in ticks)
    particles: true # (Optional) If the effect should show particles
    icon: false # (Optional) If the effect should show the icon in the top corner
    apply_to_player: false # True to apply to the player, false to apply to the victim
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
