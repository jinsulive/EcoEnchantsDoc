---
title: remove_boss_bar
titleZh: remove_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# remove_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes a boss bar

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_boss_bar` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `id` | The ID of the boss bar to remove |

## Configuration Example

```yaml
- id: remove_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
