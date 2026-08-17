---
title: multiply_all_stats
titleZh: multiply_all_stats
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
deprecated: true
---

# multiply_all_stats <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Multiplies all stats by a specific value

> **Requires:** EcoSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_all_stats` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The amount to multiply the stats by |

## Configuration Example

```yaml
- id: multiply_all_stats
  args:
    multiplier: 0.75 # The amount to multiply the stats by
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
