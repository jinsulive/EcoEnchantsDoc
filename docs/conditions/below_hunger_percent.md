---
title: below_hunger_percent
titleZh: below_hunger_percent
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# below_hunger_percent <Badge type="info" text="libreforge" />

> Requires a player to be below a certain % of their max hunger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `below_hunger_percent` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `percent` | The maximum percentage |

## Configuration Example

```yaml
- id: below_hunger_percent
  args:
    percent: 50 # The maximum percentage
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
