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
| `effect` | Potion Effect | ✅ | — | — | The potion effect type to apply. |
| `level` | Expression | ✅ | — | — | The level of the potion effect (1 = level I). Supports expressions. 例: `1 + %level% / 10` |
| `duration` | Expression | ✅ | — | — | How long the effect lasts in ticks. Supports expressions. 例: `20 * %level%` |
| `apply_to_player` | Boolean | — | `false` | — | If true, applies the effect to the player instead of the victim. |
| `particles` | Boolean | — | `true` | — | Whether to show potion effect particles. |
| `icon` | Boolean | — | `true` | — | Whether to show the effect icon in the HUD. |

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
