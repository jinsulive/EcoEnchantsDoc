---
title: target_player
titleZh: target_player
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# target_player <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Makes the victim target the player (requires the victim to be a monster)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `target_player` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTargetPlayer.kt`).

- **Source Description**: Forces the victim monster to target the player.
- **Categories**: `meta`, `entity`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`

## Configuration Example

```yaml
- id: target_player
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
