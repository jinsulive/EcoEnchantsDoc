---
title: in_gamemode
titleZh: in_gamemode
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# in_gamemode <Badge type="info" text="libreforge" />

> Requires a player to be in specified gamemode

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_gamemode` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Configuration Example

```yaml
- id: in_gamemode
  args:
    gamemode: survival
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
