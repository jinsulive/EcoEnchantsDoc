---
title: set_velocity
titleZh: set_velocity
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# set_velocity <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the player's velocity to the specified x, y, z components.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_velocity` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `x` | Expression | ✅ | — | — | The X component of the velocity vector. Supports expressions. Example: `0` |
| `y` | Expression | ✅ | — | — | The Y component of the velocity vector. Supports expressions. Example: `1.5` |
| `z` | Expression | ✅ | — | — | The Z component of the velocity vector. Supports expressions. Example: `0` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetVelocity.kt`).

- **Source Description**: Sets the player's velocity to the specified x, y, z components.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: set_velocity
  args:
    x: 0.2
    y: 0.33
    z: -0.2
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
