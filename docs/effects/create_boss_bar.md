---
title: create_boss_bar
titleZh: create_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# create_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Creates a boss bar and shows it to the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `create_boss_bar` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `id` | The ID of the boss bar |
| `name` | The name of the boss bar |
| `color` | The boss bar color (pink, blue, red, green, yellow, purple, white) |
| `style` | The boss bar style (progress, notched_6, notched_10, notched_12, notched_20) |
| `progress` | The percentage completion of the boss bar |

## Configuration Example

```yaml
- id: create_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar
    name: "Example Boss Bar" # The name of the boss bar
    color: white # The boss bar color (pink, blue, red, green, yellow, purple, white)
    style: progress # The boss bar style (progress, notched_6, notched_10, notched_12, notched_20)
    progress: 100 # The percentage completion of the boss bar
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
