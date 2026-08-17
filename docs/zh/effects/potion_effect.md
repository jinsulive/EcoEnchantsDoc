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

> 给予药水效果。

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
| `effect` | Potion Effect | ✅ | — | — | 要应用的药水效果类型。 |
| `level` | Expression | ✅ | — | — | 药水效果的等级（1 = I 级）。支持数学表达式。 例: `1 + %level% / 10` |
| `duration` | Expression | ✅ | — | — | 效果的持续时间（以刻为单位）。支持数学表达式。 例: `20 * %level%` |
| `apply_to_player` | Boolean | — | `false` | — | 若为 true，则将该效果应用于玩家而非受害者。 |
| `particles` | Boolean | — | `true` | — | 是否显示药水效果粒子。 |
| `icon` | Boolean | — | `true` | — | 是否在 HUD 中显示效果图标。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPotionEffect.kt`）。

- **源码描述**: 以可配置的持续时间和等级，向玩家或受害者施加药水效果。
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
