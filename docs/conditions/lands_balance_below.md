---
title: lands_balance_below
titleZh: lands_balance_below
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# lands_balance_below <Badge type="info" text="libreforge" />

> Requires the Land's bank balance to be below a value

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lands_balance_below` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The maximum balance |

## Configuration Example

```yaml
- id: lands_balance_below
  args:
    amount: 10000 # The maximum balance
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
