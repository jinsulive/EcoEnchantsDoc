---
title: in_region
titleZh: in_region
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# in_region <Badge type="info" text="libreforge" />
> **Requires:** WorldGuard

> Passes when the player is standing inside one of the specified WorldGuard regions.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_region` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `region` | String_list | ✅ | — | — | The WorldGuard region name(s) to check against. |

## Configuration Example

```yaml
- id: in_region
  args:
    region: # The list of regions to allow
      - spawn
      - arena
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
