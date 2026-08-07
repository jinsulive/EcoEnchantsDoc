---
title: stat_equals
titleZh: stat_equals
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# stat_equals <Badge type="info" text="libreforge" />

> Requires a player to have exactly a certain stat level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `stat_equals` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Configuration Example

```yaml
- id: stat_equals
  args:
      stat: speed # The stat ID
      level: 0 # The minimum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
