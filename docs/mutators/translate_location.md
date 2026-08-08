---
title: translate_location
titleZh: translate_location
category: mutators
subcategory: location
tags:
  - libreforge
outline: deep
---

# translate_location <Badge type="info" text="libreforge" />

> Translate the location by specified x, y, and z values

## Overview

| Property | Value |
|----------|-------|
| Type ID | `translate_location` |
| Module | libreforge |
| Category | Location |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `add_x` | Expression(数学表达式) | ✅ | — | — | The amount to add to the X coordinate. Example: `0.5` |
| `add_y` | Expression(数学表达式) | ✅ | — | — | The amount to add to the Y coordinate. Example: `1.0` |
| `add-z` | Expression(数学表达式) | ✅ | — | — | The amount to add to the Z coordinate. Example: `-0.5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorTranslateLocation.kt`).

- **Source Description**: Offsets the location by the given amounts along each axis.
- **Categories**: `location`

## Configuration Example

```yaml
- id: translate_location
  args:
    add_x: -0.1 # The amount to add to x
    add_y: 2.0 # The amount to add to y
    add-z: 0 # The amount to add to z
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
