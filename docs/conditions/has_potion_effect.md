---
title: has_potion_effect
titleZh: has_potion_effect
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# has_potion_effect <Badge type="info" text="libreforge" />

> Requires a player to have a potion effect active

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_potion_effect` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effect` | The potion effect |
| `effects` | You can also specify a list of potion effects |

## Configuration Example

```yaml
- id: has_potion_effect
  args:
    effect: blindness # The potion effect
    effects: # You can also specify a list of potion effects
      - haste
      - speed
      - blindness
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
