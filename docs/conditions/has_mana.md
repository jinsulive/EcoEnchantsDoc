---
title: has_mana
titleZh: has_mana
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_mana <Badge type="info" text="libreforge" />

> Requires a player to have amount of mana

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_mana` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of mana |

## Configuration Example

```yaml
- id: has_mana
  args:
    amount: 200 # The amount of mana
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
