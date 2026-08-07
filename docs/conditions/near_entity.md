---
title: near_entity
titleZh: near_entity
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# near_entity <Badge type="info" text="libreforge" />

> Requires a player to be within a certain radius of an entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `near_entity` |
| Module | libreforge |
| Category | Position & Movement |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `entities` | The list of entities |
| `radius` | The radius |
| `amount` | (Optional) The minimum amount of listed entities |

## Configuration Example

```yaml
- id: near_entity
  args:
    entities: # The list of entities
      - zombie
      - ecomobs:illusioner
    radius: 25 # The radius
    amount: 5 # (Optional) The minimum amount of listed entities
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
