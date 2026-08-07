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

> Make nearby blocks of a certain type glow a certain color

## Overview

| Property | Value |
|----------|-------|
| Type ID | `glow_nearby_blocks` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `radius` | The radius, in blocks |
| `duration` | How long to show the glow effect for, in ticks |
| `colors` | Add as many blocks as you want, the color is from ChatColor javadocs |

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
