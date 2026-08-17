---
title: is_booster_active
titleZh: is_booster_active
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# is_booster_active <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a certain booster to be active on the server

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_booster_active` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `booster` | The Booster ID |

## Configuration Example

```yaml
- id: is_booster_active
  args:
    booster: 1_5skill_multiplier # The Booster ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
