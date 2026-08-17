---
title: rotate
titleZh: rotate
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# rotate <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Rotates the player's yaw by a specified angle.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `rotate` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `angle` | Expression | ✅ | — | — | The number of degrees to add to the player's current yaw. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRotate.kt`).

- **Source Description**: Rotates the player's yaw by a specified angle.
- **Categories**: `movement`, `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: rotate
  args:
    angle: 180 # The angle to rotate / spin (in degrees)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
