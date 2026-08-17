---
title: lands_balance_above
titleZh: lands_balance_above
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# lands_balance_above <Badge type="info" text="libreforge" />
> **Requires:** Lands

> Passes when the Lands area at the player's location has a balance above the specified amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lands_balance_above` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The balance threshold the land's balance must exceed. |

## Configuration Example

```yaml
- id: lands_balance_above
  args:
    amount: 10000 # The minimum balance
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
