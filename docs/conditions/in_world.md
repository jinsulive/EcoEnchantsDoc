---
title: in_world
titleZh: in_world
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# in_world <Badge type="info" text="libreforge" />

> Requires a player to be in a certain world

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_world` |
| Module | libreforge |
| Category | World & Environment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `world` | The world name |

## Configuration Example

```yaml
- id: in_world
  args:
    world: the_end # The world name
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
