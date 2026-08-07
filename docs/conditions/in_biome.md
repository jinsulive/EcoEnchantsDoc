---
title: in_biome
titleZh: in_biome
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# in_biome <Badge type="info" text="libreforge" />

> Requires a player to be in a specific biome

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_biome` |
| Module | libreforge |
| Category | World & Environment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `biomes` | A list of biomes |

## Configuration Example

```yaml
- id: in_biome
  args:
    biomes: # A list of biomes
      - river
      - savanna
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
