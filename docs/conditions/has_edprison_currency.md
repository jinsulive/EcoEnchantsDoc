---
title: has_edprison_currency
titleZh: has_edprison_currency
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_edprison_currency <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires the player to have a certain amount of EdPrison currency.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_edprison_currency` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The currency type |
| `amount` | The amnount of currency required |

## Configuration Example

```yaml
- id: has_edprison_currency
  args:
    type: blocks # The currency type
    amount: 1500 # The amnount of currency required
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
