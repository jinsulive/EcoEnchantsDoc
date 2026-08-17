---
title: has_completed_quest
titleZh: has_completed_quest
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_completed_quest <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have completed a quest

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_completed_quest` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `quest` | The quest ID |

## Configuration Example

```yaml
- id: has_completed_quest
  args:
    quest: magic_miner # The quest ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
