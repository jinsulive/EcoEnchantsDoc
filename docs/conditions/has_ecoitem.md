---
title: has_ecoitem
titleZh: has_ecoitem
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_ecoitem <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have a certain EcoItem active

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_ecoitem` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `item` | The item ID |

## Configuration Example

```yaml
- id: has_ecoitem
  args:
    item: reaper_scythe # The item ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
