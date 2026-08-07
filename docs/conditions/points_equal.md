---
title: points_equal
titleZh: points_equal
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# points_equal <Badge type="info" text="libreforge" />

> Requires a player to have a exactly a certain amount of points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `points_equal` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The type of point |
| `amount` | The amount of points |

## Configuration Example

```yaml
- id: points_equal
  args:
    type: g_souls # The type of point
    amount: 10 # The amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
