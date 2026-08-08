---
title: remove_dispatcher
titleZh: remove_dispatcher
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# remove_dispatcher <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes the dispatcher entity from the world. Only works on non-player entities.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_dispatcher` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveDispatcher.kt`).

- **Source Description**: Removes (despawns) the dispatcher entity. Has no effect if the dispatcher is a player.
- **Categories**: `combat`, `entity`

## Configuration Example

```yaml
- id: remove_dispatcher
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
