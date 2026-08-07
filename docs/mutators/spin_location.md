---
title: spin_location
titleZh: spin_location
category: mutators
subcategory: rotation
tags:
  - libreforge
outline: deep
---

# spin_location <Badge type="info" text="libreforge" />

> Spin a location a certain angle with a radius away from its current position - for example spinning the location 90 degrees at a distance of 1 block

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spin_location` |
| Module | libreforge |
| Category | Rotation |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `angle` | The angle to spin around, in degrees |
| `distance` | The distance from the current location, in the direction the location is facing |

## Configuration Example

```yaml
- id: spin_location
  args:
    angle: 15 # The angle to spin around, in degrees
    distance: 1 # The distance from the current location, in the direction the location is facing
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
