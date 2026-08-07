---
title: has_lands_role
titleZh: has_lands_role
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_lands_role <Badge type="info" text="libreforge" />

> Requires a player to have a certain role in the Land

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_lands_role` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `roles` | The ID of the role |

## Configuration Example

```yaml
- id: has_lands_role
  args:
    roles: # The ID of the role
      - member
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
