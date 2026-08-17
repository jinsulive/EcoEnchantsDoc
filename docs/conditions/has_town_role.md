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
> **Requires:** HuskTowns

> Passes when the player holds one of the specified roles in their HuskTowns town.

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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `roles` | String_list | ✅ | — | — | A list of HuskTowns town role names to check against (e.g. mayor, resident). |

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
