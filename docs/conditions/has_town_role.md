---
title: has_town_role
titleZh: has_town_role
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_town_role <Badge type="info" text="libreforge" />

> Requires a player to have a certain role in a town

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_town_role` |
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
- id: has_town_role
  args:
    roles: # The ID of the role
      - captain
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
