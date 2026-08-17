---
title: teleport
titleZh: teleport
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# teleport <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleports the player to the trigger location, preserving their look direction.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `teleport` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| — | — | — | — | — | This component takes no parameters. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTeleport.kt`).

- **Source Description**: Teleports the player to the trigger location, preserving their look direction.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
- id: teleport
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
