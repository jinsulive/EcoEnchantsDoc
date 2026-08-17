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

> Passes when the player is located in one of the specified biomes.

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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `biomes` | String List | ✅ | — | — | The list of biome names to check against. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInBiome.kt`).

- **Source Description**: Passes when the player is located in one of the specified biomes.
- **Categories**: `world`

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
