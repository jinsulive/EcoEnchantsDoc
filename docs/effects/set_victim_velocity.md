---
title: set_victim_velocity
titleZh: set_victim_velocity
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# set_victim_velocity <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the victim's velocity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_victim_velocity` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `x` | Expression(数学表达式) | ✅ | — | — | The X component of the velocity vector. Supports expressions. Example: `0` |
| `y` | Expression(数学表达式) | ✅ | — | — | The Y component of the velocity vector. Supports expressions. Example: `1.5` |
| `z` | Expression(数学表达式) | ✅ | — | — | The Z component of the velocity vector. Supports expressions. Example: `0` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetVictimVelocity.kt`).

- **Source Description**: Sets the victim entity's velocity to the specified x, y, z components.
- **Categories**: `movement`, `combat`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: set_victim_velocity
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
