---
title: autosmelt
titleZh: autosmelt
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# autosmelt <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Autosmelts drops (requires a drop trigger)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `autosmelt` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `drop_xp` | If the furnace xp should be dropped |

## Configuration Example

```yaml
- id: autosmelt
  args:
    drop_xp: true # If the furnace xp should be dropped
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
