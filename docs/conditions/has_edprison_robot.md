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
> **Requires:** EdPrison

> Passes when the player owns the specified EDPrisonCore robot type.

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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `robot` | String | ✅ | — | — | The EDPrisonCore robot type the player must own. |

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
