---
title: pull_to_location
titleZh: pull_to_location
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# pull_to_location <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Pulls the player toward the trigger location with a specified velocity.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pull_to_location` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `velocity` | Expression | ✅ | — | — | The strength of the pull force applied to the player. Supports expressions. Example: `1 + %level% * 0.1` |
| `jump` | Expression | — | `0` | — | An upward boost added to the pull vector. Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPullToLocation.kt`).

- **Source Description**: Pulls the player toward the trigger location with a specified velocity.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
- id: pull_to_location
  args:
    velocity: 1.5 # The speed at which to be pulled (magnitude of the velocity vector)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
