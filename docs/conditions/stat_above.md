---
title: stat_above
titleZh: stat_above
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# stat_above <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have at least a certain stat level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `stat_above` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Configuration Example

```yaml
- id: stat_above
  args:
      stat: wisdom # The stat ID
      level: 30 # The minimum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
