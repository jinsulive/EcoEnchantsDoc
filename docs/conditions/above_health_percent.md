---
title: above_health_percent
titleZh: above_health_percent
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# above_health_percent <Badge type="info" text="libreforge" />

> Requires a player to be above a certain % of their max health

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_health_percent` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `percent` | The minimum percent |

## Configuration Example

```yaml
- id: above_health_percent
  args:
    percent: 50 # The minimum percent
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
