---
title: item_points_above
titleZh: item_points_above
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# item_points_above <Badge type="info" text="libreforge" />

> Requires an item to have a certain amount of points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_points_above` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The type of point |
| `amount` | The minimum amount of points |

## Configuration Example

```yaml
- id: item_points_above
  args:
    type: point_name # The type of point
    amount: 10 # The minimum amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
