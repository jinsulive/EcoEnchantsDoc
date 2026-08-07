---
title: below_points
titleZh: below_points
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_points <Badge type="info" text="libreforge" />

> Requires a player to have a below amount of points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `below_points` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The type of point |
| `amount` | The maximum amount of points |

## Configuration Example

```yaml
- id: below_points
  args:
    type: g_souls # The type of point
    amount: 10 # The maximum amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
