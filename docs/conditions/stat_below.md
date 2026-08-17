---
title: stat_below
titleZh: stat_below
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# stat_below <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have less than a certain stat level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `stat_below` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Configuration Example

```yaml
- id: stat_above
  args:
      stat: ferocity # The stat ID
      level: 5 # The minimum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
