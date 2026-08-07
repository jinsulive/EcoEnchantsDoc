---
title: mcmmo_ability_on_cooldown
titleZh: mcmmo_ability_on_cooldown
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# mcmmo_ability_on_cooldown <Badge type="info" text="libreforge" />

> Requires an McMMO ability to be on cooldown

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mcmmo_ability_on_cooldown` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `abilities` | The ID of the ability |

## Configuration Example

```yaml
- id: mcmmo_ability_on_cooldown
  args:
    abilities: 
      - serrated_strikes # The ID of the ability
      - super_breaker
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
