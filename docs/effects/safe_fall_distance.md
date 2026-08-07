---
title: safe_fall_distance
titleZh: safe_fall_distance
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# safe_fall_distance <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Increases/decreases the distance you can fall without taking damage

## Overview

| Property | Value |
|----------|-------|
| Type ID | `safe_fall_distance` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `distance` | The extra distance |

## Configuration Example

```yaml
- id: safe_fall_distance
  args:
    distance: 10.5 # The extra distance
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
