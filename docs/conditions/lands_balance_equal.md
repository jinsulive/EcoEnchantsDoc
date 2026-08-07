---
title: lands_balance_equal
titleZh: lands_balance_equal
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# lands_balance_equal <Badge type="info" text="libreforge" />

> Requires the Land's bank balance to be equal to a value

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lands_balance_equal` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The required balance |

## Configuration Example

```yaml
- id: lands_balance_equal
  args:
    amount: 10000 # The required balance
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
