---
title: pull_in
titleZh: pull_in
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# pull_in <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Pull the victim towards the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pull_in` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `velocity` | The speed at which to be pulled (magnitude of the velocity vector) |

## Configuration Example

```yaml
- id: pull_in
  args:
    velocity: 0.2 # The speed at which to be pulled (magnitude of the velocity vector)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
