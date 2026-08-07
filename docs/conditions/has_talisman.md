---
title: has_talisman
titleZh: has_talisman
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_talisman <Badge type="info" text="libreforge" />

> Requires a player to have a certain talisman active

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_talisman` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `talisman` | The talisman ID |

## Configuration Example

```yaml
- id: has_talisman
  args:
    talisman: attack_speed_2 # The talisman ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
