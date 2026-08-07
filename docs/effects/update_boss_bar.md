---
title: update_boss_bar
titleZh: update_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# update_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Updates a boss bar

## Overview

| Property | Value |
|----------|-------|
| Type ID | `update_boss_bar` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `id` | The ID of the boss bar to update |
| `name` | (Optional) The new name of the boss bar |
| `color` | (Optional) The new boss bar color (pink, blue, red, green, yellow, purple, white) |
| `style` | (Optional) The new boss bar style (progress, notched_6, notched_10, notched_12, notched_20) |
| `progress` | (Optional) The new percentage completion of the boss bar |

## Configuration Example

```yaml
- id: update_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar to update
    name: "Updated Boss Bar" # (Optional) The new name of the boss bar
    color: pink # (Optional) The new boss bar color (pink, blue, red, green, yellow, purple, white)
    style: notched_6 # (Optional) The new boss bar style (progress, notched_6, notched_10, notched_12, notched_20)
    progress: "%libreforge_boss_bar_my_boss_bar_progress% + 10" # (Optional) The new percentage completion of the boss bar
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
