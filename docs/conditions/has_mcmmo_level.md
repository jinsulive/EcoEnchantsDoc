---
title: has_mcmmo_level
titleZh: has_mcmmo_level
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_mcmmo_level <Badge type="info" text="libreforge" />

> Requires a player to have a certain McMMO skill level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_mcmmo_level` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `skill` | The skill ID |
| `level` | The minimum level |

## Configuration Example

```yaml
- id: has_mcmmo_level
  args:
    skill: mining # The skill ID
    level: 30 # The minimum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
