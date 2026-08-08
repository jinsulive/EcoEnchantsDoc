---
title: teleport_to_ground
titleZh: teleport_to_ground
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# teleport_to_ground <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleports to the ground

## Overview

| Property | Value |
|----------|-------|
| Type ID | `teleport_to_ground` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTeleportToGround.kt`).

- **Source Description**: Teleports the player straight down to the first solid ground beneath them.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: teleport_to_ground
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
