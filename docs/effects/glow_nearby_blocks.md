---
title: glow_nearby_blocks
titleZh: glow_nearby_blocks
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# glow_nearby_blocks <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Makes nearby blocks glow with configurable colors for a set duration.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `glow_nearby_blocks` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression | ✅ | — | — | The radius around the trigger location to search for matching blocks. Supports expressions. Example: `5 + %level% * 0.5` |
| `duration` | Expression | ✅ | — | — | How long in ticks the blocks should glow. Supports expressions. Example: `20 * %level%` |
| `colors` | Any | ✅ | — | — | A subsection mapping block material names to ChatColor names (e.g. DIAMOND_ORE: AQUA). |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGlowNearbyBlocks.kt`).

- **Source Description**: Makes nearby blocks glow with configurable colors for a set duration.
- **Categories**: `visual`, `world`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: glow_nearby_blocks
  args:
    radius: 10 # The radius, in blocks
    duration: 30 # How long to show the glow effect for, in ticks
    colors:
      diamond_ore: aqua # Add as many blocks as you want, the color is from https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
