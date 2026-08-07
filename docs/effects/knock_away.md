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

| Parameter | Description |
|-----------|-------------|
| `velocity` | The speed at which to be pulled (magnitude of the velocity vector) |

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
