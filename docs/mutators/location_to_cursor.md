---
title: location_to_cursor
titleZh: location_to_cursor
category: mutators
subcategory: location
tags:
  - libreforge
outline: deep
---

# location_to_cursor <Badge type="info" text="libreforge" />

> Move the location to where you or the victim are looking

## Overview

| Property | Value |
|----------|-------|
| Type ID | `location_to_cursor` |
| Module | libreforge |
| Category | Location |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `target` | The target location (either block or entity) |
| `start` | Where to raytrace from (either player or victim) |

## Configuration Example

```yaml
- id: location_to_cursor
  args:
    target: block # The target location (either block or entity)
    start: player # Where to raytrace from (either player or victim)
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
