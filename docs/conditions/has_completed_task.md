---
title: has_completed_task
titleZh: has_completed_task
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_completed_task <Badge type="info" text="libreforge" />

> Requires a player to have completed task for a quest

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_completed_task` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `quest` | The quest ID |
| `task` | The task ID |

## Configuration Example

```yaml
- id: has_completed_task
  args:
    quest: magic_miner # The quest ID
    task: mine_diamonds # The task ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
