---
title: permanent_potion_effect
titleEn: permanent_potion_effect
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# permanent_potion_effect <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 给予永久药水效果。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `permanent_potion_effect` |
| 所属模块 | libreforge |
| 分类 | 药水（Potion） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effect` | Potion Effect | ✅ | — | — | The potion effect type to apply (e.g. SPEED, STRENGTH). |
| `level` | Expression | ✅ | — | — | The amplifier level of the potion effect (1 = level I). Supports expressions. 例: `1 + %level% / 10` |
| `particles` | Boolean | — | `true` | — | Whether the potion effect shows particles. Defaults to true. |
| `icon` | Boolean | — | `true` | — | Whether the potion effect shows an icon in the HUD. Defaults to true. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPermanentPotionEffect.kt`）。

- **源码描述**: 持有器激活期间，永久对玩家施加药水效果，死亡重生后依然生效。
- **所属分类**: `potion`, `player`

## 配置示例

```yaml
- id: permanent_potion_effect
  args:
    effect: blindness # The effect to give
    level: 2 # The effect level to give
    particles: true # (Optional) If the effect should show particles
    icon: false # (Optional) If the effect should show the icon in the top corner
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
