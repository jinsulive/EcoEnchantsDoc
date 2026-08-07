---
title: reel_speed_multiplier
titleZh: reel_speed_multiplier
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# reel_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the speed at which you pull in entities and drops with fishing rods

## Overview

| Property | Value |
|----------|-------|
| Type ID | `reel_speed_multiplier` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier |

## Configuration Example

```yaml
- id: reel_speed_multiplier
  args:
    multiplier: 1.2 # The multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
