---
title: has_pet
titleZh: has_pet
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_pet <Badge type="info" text="libreforge" />

> Requires a player to have a certain pet

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_pet` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `pet` | The pet ID |

## Configuration Example

```yaml
- id: has_pet
  args:
    pet: black_cat # The pet ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
