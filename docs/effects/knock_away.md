---
title: knock_away
titleZh: knock_away
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# knock_away <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Knock the victim away from the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `knock_away` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `velocity` | Expression(数学表达式) | ✅ | — | — | The speed at which the victim is knocked away from the player. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKnockAway.kt`).

- **Source Description**: Launches the victim away from the player with a specified velocity.
- **Categories**: `combat`, `movement`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`

## Configuration Example

```yaml
- id: knock_away
  args:
    velocity: 0.3 # The speed at which to be pulled (magnitude of the velocity vector)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
