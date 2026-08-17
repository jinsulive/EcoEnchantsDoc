---
title: multiply_stat
titleZh: multiply_stat
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
deprecated: true
---

# multiply_stat <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Multiplies a stat by a specific value

> **Requires:** EcoSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_stat` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `stat` | The name of the stat |
| `multiplier` | The amount to multiply the stat by |

## Configuration Example

```yaml
- id: multiply_stat
  args:
    stat: speed # The name of the stat
    multiplier: 0.75 # The amount to multiply the stat by
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
