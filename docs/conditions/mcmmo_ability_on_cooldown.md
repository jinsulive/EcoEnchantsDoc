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
> **Requires:** mcMMO

> Passes when any of the specified mcMMO super abilities are currently on cooldown for the player.

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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `abilities` | String_list | ✅ | — | — | A list of mcMMO super ability names to check (e.g. SUPER_BREAKER, GIGA_DRILL_BREAKER). |

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
