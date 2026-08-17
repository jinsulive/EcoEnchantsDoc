---
title: glow_nearby_blocks
titleEn: glow_nearby_blocks
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# glow_nearby_blocks <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 使附近指定类型的方块以指定颜色发光。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `glow_nearby_blocks` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression | ✅ | — | — | 触发位置周围搜索匹配方块的半径。支持数学表达式。 例: `5 + %level% * 0.5` |
| `duration` | Expression | ✅ | — | — | 方块应发光的时长（以刻为单位）。支持数学表达式。 例: `20 * %level%` |
| `colors` | Any | ✅ | — | — | 将方块材质名称映射到 ChatColor 名称的子节（例如 DIAMOND_ORE: AQUA）。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGlowNearbyBlocks.kt`）。

- **源码描述**: 在指定时长内使附近的方块以可配置的颜色发光。
- **所属分类**: `visual`, `world`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: glow_nearby_blocks
  args:
    radius: 10 # The radius, in blocks
    duration: 30 # How long to show the glow effect for, in ticks
    colors:
      diamond_ore: aqua # Add as many blocks as you want, the color is from https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
