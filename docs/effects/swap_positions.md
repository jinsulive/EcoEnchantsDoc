---
title: swap_positions
titleZh: swap_positions
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# swap_positions <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Swaps the positions of the player and the victim

## Overview

| Property | Value |
|----------|-------|
| Type ID | `swap_positions` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSwapPositions.kt`).

- **Source Description**: Swaps the positions of the player and the victim instantly.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`

## Configuration Example

```yaml
- id: swap_positions
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
