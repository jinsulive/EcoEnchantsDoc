---
title: is_wearing_set
titleZh: is_wearing_set
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_wearing_set <Badge type="info" text="libreforge" />

> Requires a player to be wearing a certain EcoArmor set

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_wearing_set` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `set` | The EcoArmor set ID |
| `advanced` | (Optional) Require the set to be advanced (or not advanced) |

## Configuration Example

```yaml
- id: is_wearing_set
  args:
    set: reaper # The EcoArmor set ID
    advanced: true # (Optional) Require the set to be advanced (or not advanced)
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
