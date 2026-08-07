---
title: has_permission
titleZh: has_permission
category: conditions
subcategory: permissions
tags:
  - libreforge
outline: deep
---

# has_permission <Badge type="info" text="libreforge" />

> Requires a player to have a certain permission

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_permission` |
| Module | libreforge |
| Category | Permissions & Ranks |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `permission` | The required permission |

## Configuration Example

```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp" # The required permission
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
