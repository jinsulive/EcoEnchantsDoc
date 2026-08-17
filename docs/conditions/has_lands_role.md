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
> **Requires:** Lands

> Passes when the player holds one of the specified roles in the Lands area at their current location.

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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `roles` | String_list | ✅ | — | — | A list of Lands role names to check against (e.g. owner, member). |

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
