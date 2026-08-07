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

> Spawns a potion cloud

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spawn_potion_cloud` |
| 所属模块 | libreforge |
| 分类 | 药水（Potion） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `effect` | The effect to give (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html) |
| `level` | The level to give |
| `duration` | The duration of the effect (in ticks) |

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
