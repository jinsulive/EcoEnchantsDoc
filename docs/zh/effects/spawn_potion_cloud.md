---
title: spawn_potion_cloud
titleEn: spawn_potion_cloud
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# spawn_potion_cloud <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 生成药水云。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spawn_potion_cloud` |
| 所属模块 | libreforge |
| 分类 | 药水（Potion） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effect` | Potion Effect | ✅ | — | — | The potion effect to apply to entities in the cloud. |
| `level` | Expression | ✅ | — | — | The amplifier level of the potion effect. Supports expressions. 例: `1 + %level% / 10` |
| `duration` | Expression | ✅ | — | — | How long the cloud and its applied effect last, in ticks. Supports expressions. 例: `20 * %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnPotionCloud.kt`）。

- **源码描述**: 在触发位置生成施加药水效果的滞留药水云。
- **所属分类**: `potion`, `visual`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: spawn_potion_cloud
  args:
    effect: blindness # The effect to give (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
    level: 1 # The level to give
    duration: 80 # The duration of the effect (in ticks)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
