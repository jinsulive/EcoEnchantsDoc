---
title: above_xp_level
titleZh: above_xp_level
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# above_xp_level <Badge type="info" text="libreforge" />

> Requires the player to be above a certain xp level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_xp_level` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `level` | The minimum XP level |

## Configuration Example

```yaml
- id: above_xp_level
  args:
    level: 100 # The minimum XP level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
