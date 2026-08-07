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

| Parameter | Description |
|-----------|-------------|
| `add_x` | The amount to add to x |
| `add_y` | The amount to add to y |
| `add-z` | The amount to add to z |

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
