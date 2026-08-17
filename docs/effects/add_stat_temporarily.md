---
title: add_stat_temporarily
titleZh: add_stat_temporarily
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
deprecated: true
---

# add_stat_temporarily <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Adds a value to a specific stat

> **Requires:** EcoSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_stat_temporarily` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `stat` | The name of the stat |
| `amount` | The amount to add (or subtract, allows negative values) |
| `duration` | The duration (in ticks) |

## Configuration Example

```yaml
- id: add_stat_temporarily
  args:
    stat: strength # The name of the stat
    amount: 10 # The amount to add (or subtract, allows negative values)
    duration: 20 # The duration (in ticks)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
