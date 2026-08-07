---
title: give_task_xp
titleZh: give_task_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_task_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives experience points for a task in a quest, excluding multipliers.

> **Requires:** EcoQuests

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_task_xp` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `quest` | The quest ID |
| `task` | The task ID |
| `xp` | The amount of xp to give |

## Configuration Example

```yaml
- id: give_task_xp
  args:
    quest: magic_miner # The quest ID
    task: mine_gold # The task ID
    xp: 100 # The amount of xp to give
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
