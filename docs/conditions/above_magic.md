---
title: above_magic
titleZh: above_magic
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# above_magic <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have a certain amount of magic

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_magic` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The type of magic |
| `amount` | The minimum amount of magic |

## Configuration Example

```yaml
- id: above_magic
  args:
    type: mana # The type of magic
    amount: 100 # The minimum amount of magic
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
