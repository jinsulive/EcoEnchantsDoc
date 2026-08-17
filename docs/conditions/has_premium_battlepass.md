---
title: has_premium_battlepass
titleZh: has_premium_battlepass
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_premium_battlepass <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have the premium battlepass

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_premium_battlepass` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `battlepass` | The battlepass ID |

## Configuration Example

```yaml
- id: has_premium_battlepass
  args:
    battlepass: example # The battlepass ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
