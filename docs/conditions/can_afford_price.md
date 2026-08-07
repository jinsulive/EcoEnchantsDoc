---
title: can_afford_price
titleZh: can_afford_price
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# can_afford_price <Badge type="info" text="libreforge" />

> Requires a player to be able to afford a certain price

## Overview

| Property | Value |
|----------|-------|
| Type ID | `can_afford_price` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `value` | The value of the price |
| `type` | The price type |

## Configuration Example

```yaml
- id: can_afford_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
