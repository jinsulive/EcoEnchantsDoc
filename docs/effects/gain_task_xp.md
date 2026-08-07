---
title: gain_task_xp
titleZh: gain_task_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# gain_task_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gains experience points for a task in a quest, including multipliers.

> **Requires:** EcoQuests

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_task_xp` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `quest` | The quest ID |
| `task` | The task ID |
| `xp` | The amount of xp to gain |

## Configuration Example

```yaml
- id: gain_task_xp
  args:
    quest: magic_miner # The quest ID
    task: mine_gold # The task ID
    xp: 100 # The amount of xp to gain
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
