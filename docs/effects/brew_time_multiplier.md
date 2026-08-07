---
title: brew_time_multiplier
titleZh: brew_time_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# brew_time_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the time taken to brew potions

## Overview

| Property | Value |
|----------|-------|
| Type ID | `brew_time_multiplier` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier |

## Configuration Example

```yaml
- id: brew_time_multiplier
  args:
    multiplier: 0.8 # The multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
