---
title: spin_velocity
titleZh: spin_velocity
category: mutators
subcategory: rotation
tags:
  - libreforge
outline: deep
---

# spin_velocity <Badge type="info" text="libreforge" />

> Rotate a velocity around the y axis

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spin_velocity` |
| Module | libreforge |
| Category | Rotation |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `angle` | Expression(数学表达式) | ✅ | — | — | The angle in degrees to rotate the velocity around the Y axis. Example: `%level% * 5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorSpinVelocity.kt`).

- **Source Description**: Rotates the velocity vector around the Y axis by the given angle.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: spin_velocity
  args:
    angle: 15 # The angle to spin around, in degrees
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
