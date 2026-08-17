---
title: has_mana
titleZh: has_mana
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_mana <Badge type="info" text="libreforge" />
> **Requires:** AuraSkills

> Passes when the player has at least a specified amount of AuraSkills mana.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_mana` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The minimum amount of mana the player must have. |

## Configuration Example

```yaml
- id: has_mana
  args:
    amount: 200 # The amount of mana
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
