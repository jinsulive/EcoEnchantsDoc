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

> Offsets the location by a distance in a direction rotated from the current facing direction.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spin_location` |
| Module | libreforge |
| Category | Rotation |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `angle` | Expression | ✅ | — | — | The angle in degrees to rotate around the Y axis. Example: `%level% * 10` |
| `distance` | Expression | ✅ | — | — | The distance from the current location to offset in the rotated direction. Example: `1 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorSpinLocation.kt`).

- **Source Description**: Offsets the location by a distance in a direction rotated from the current facing direction.
- **Categories**: `location`

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
