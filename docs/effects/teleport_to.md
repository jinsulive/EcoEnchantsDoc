---
title: teleport_to
titleZh: teleport_to
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# teleport_to <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleport a player to a specific location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `teleport_to` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `world` | String | ✅ | — | — | The world name \| Source: The name of the world to teleport to. Example: `world_nether` |
| `x` | Expression(数学表达式) | ✅ | — | — | The x-coordinate \| Source: The X coordinate to teleport to. Supports expressions. Example: `100` |
| `y` | Expression(数学表达式) | ✅ | — | — | The y-coordinate \| Source: The Y coordinate to teleport to. Supports expressions. Example: `64` |
| `z` | Expression(数学表达式) | ✅ | — | — | The z-coordinate \| Source: The Z coordinate to teleport to. Supports expressions. Example: `-200` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTeleportTo.kt`).

- **Source Description**: Teleports the player to a specific coordinate in a named world.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: teleport_to
  args:
    world: world_nether # The world name
    x: 100 # The x-coordinate
    y: 50 # The y-coordinate
    z: -581.2 # The z-coordinate
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
