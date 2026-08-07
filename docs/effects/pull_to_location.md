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

> Get pulled to a location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pull_to_location` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `velocity` | The speed at which to be pulled (magnitude of the velocity vector) |

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
