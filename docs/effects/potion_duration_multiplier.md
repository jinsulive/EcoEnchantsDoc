---
title: potion_duration_multiplier
titleZh: potion_duration_multiplier
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# potion_duration_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the duration of brewed potions

## Overview

| Property | Value |
|----------|-------|
| Type ID | `potion_duration_multiplier` |
| Module | libreforge |
| Category | Potion |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier |

## Configuration Example

```yaml
- id: potion_duration_multiplier
  args:
    multiplier: 1.2 # The multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
