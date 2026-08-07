---
title: above_balance
titleZh: above_balance
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# above_balance <Badge type="info" text="libreforge" />

> Requires a player to have a certain amount of money

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_balance` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `balance` | The minimum amount of money |

## Configuration Example

```yaml
- id: above_balance
  args:
    balance: 150000.50 # The minimum amount of money
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
