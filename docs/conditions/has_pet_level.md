---
title: has_pet_level
titleZh: has_pet_level
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_pet_level <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have a certain pet level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_pet_level` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `pet` | The pet ID |
| `level` | The minimum level |

## Configuration Example

```yaml
- id: has_pet_level
  args:
    pet: black_cat # The pet ID
    level: 30 # The minimum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
