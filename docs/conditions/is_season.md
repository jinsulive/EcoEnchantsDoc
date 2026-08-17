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
> **Requires:** CustomCrops

> Passes when the current world season matches one of the specified seasons.

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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `season` / `seasons` (either) | String_list | ✅ | — | — | The season name(s) to check against (e.g. SPRING, SUMMER, AUTUMN, WINTER). |

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
