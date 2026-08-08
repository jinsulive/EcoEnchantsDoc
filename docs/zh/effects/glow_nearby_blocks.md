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

> Make nearby blocks of a certain type glow a certain color

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
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius, in blocks \| Source: The radius around the trigger location to search for matching blocks. Supports expressions. Example: `5 + %level% * 0.5` |
| `duration` | Expression(数学表达式) | ✅ | — | — | How long to show the glow effect for, in ticks \| Source: How long in ticks the blocks should glow. Supports expressions. Example: `20 * %level%` |
| `colors` | Any/Custom | ✅ | — | — | Add as many blocks as you want, the color is from ChatColor javadocs \| Source: A subsection mapping block material names to ChatColor names (e.g. DIAMOND_ORE: AQUA). |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGlowNearbyBlocks.kt`）。

- **源码描述**: Makes nearby blocks glow with configurable colors for a set duration.
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
