---
title: armor_toughness
titleZh: armor_toughness
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# armor_toughness <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Gives armor toughness

## Overview

| Property | Value |
|----------|-------|
| Type ID | `armor_toughness` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `points` | The amount of armor toughness points to give |

## Configuration Example

```yaml
- id: armor_toughness
  args:
    points: 8 # The amount of armor toughness points to give
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
