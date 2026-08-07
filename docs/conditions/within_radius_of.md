---
title: within_radius_of
titleZh: within_radius_of
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# within_radius_of <Badge type="info" text="libreforge" />

> Requires a player to be within a certain radius of a location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `within_radius_of` |
| Module | libreforge |
| Category | Position & Movement |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `x` | The x coordinate |
| `y` | The y coordinate |
| `z` | The z coordinate |
| `radius` | The radius |

## Configuration Example

```yaml
- id: within_radius_of
  args:
    x: 100 # The x coordinate
    y: 100 # The y coordinate
    z: 100 # The z coordinate
    radius: 25 # The radius
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
