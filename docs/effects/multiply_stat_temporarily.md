---
title: multiply_stat_temporarily
titleZh: multiply_stat_temporarily
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# multiply_stat_temporarily <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies a stat by a specific value

> **Requires:** EcoSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_stat_temporarily` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `stat` | The name of the stat |
| `multiplier` | The amount to multiply the stat by |
| `duration` | The duration (in ticks) |

## Configuration Example

```yaml
- id: multiply_stat_temporarily
  args:
    stat: strength # The name of the stat
    multiplier: 1.1 # The amount to multiply the stat by
    duration: 20 # The duration (in ticks)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
