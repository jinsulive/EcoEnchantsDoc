---
title: remove_victim
titleZh: remove_victim
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# remove_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes the victim entity from the world. Only works on non-player entities.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_victim` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveVictim.kt`).

- **Source Description**: Removes (despawns) the victim entity. Has no effect if the victim is a player.
- **Categories**: `combat`, `entity`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: remove_victim
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
