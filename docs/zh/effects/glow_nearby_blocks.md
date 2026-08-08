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
| `radius` | Expression(数学表达式) | ✅ | — | — | 搜索匹配方块的半径（以方块为单位）。支持表达式。示例：`5 + %level% * 0.5` |
| `duration` | Expression(数学表达式) | ✅ | — | — | 发光效果的持续时长（以游戏刻为单位）。支持表达式。示例：`20 * %level%` |
| `colors` | Any/Custom | ✅ | — | — | 按需添加任意数量的方块，颜色取自 ChatColor 文档。 |

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
