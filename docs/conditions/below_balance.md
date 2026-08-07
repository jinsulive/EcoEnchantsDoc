---
title: below_balance
titleZh: below_balance
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_balance <Badge type="info" text="libreforge" />

> Requires a player to have below a certain amount of money

## Overview

| Property | Value |
|----------|-------|
| Type ID | `below_balance` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `balance` | The maximum amount of money |

## Configuration Example

```yaml
- id: below_balance
  args:
    balance: 150000.50 # The maximum amount of money
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
