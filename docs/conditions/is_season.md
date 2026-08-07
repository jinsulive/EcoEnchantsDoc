---
title: is_season
titleZh: is_season
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_season <Badge type="info" text="libreforge" />

> Requires it to be a certain season

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_season` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `season` | Use for a single season |
| `seasons` | Use for multiple seasons |

## Configuration Example

```yaml
- id: is_season
  args:
    season: summer # Use for a single season
    seasons: # Use for multiple seasons
      - summer
      - spring
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
