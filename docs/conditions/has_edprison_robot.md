---
title: has_edprison_robot
titleZh: has_edprison_robot
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_edprison_robot <Badge type="info" text="libreforge" />

> Requires the player to have a specific EdPrison robot.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_edprison_robot` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `robot` | The currency type |

## Configuration Example

```yaml
- id: has_edprison_robot
  args:
    robot: COAL_ROBOT # The currency type
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
