---
title: has_battlepass_tier
titleZh: has_battlepass_tier
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_battlepass_tier <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have a certain battlepass tier

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_battlepass_tier` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `tier` | The tier |
| `battlepass` | The battlepass ID |

## Configuration Example

```yaml
- id: has_battlepass_tier
  args:
    tier: 27 # The tier
    battlepass: example # The battlepass ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
