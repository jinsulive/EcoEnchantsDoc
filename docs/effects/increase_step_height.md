---
title: increase_step_height
titleZh: increase_step_height
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# increase_step_height <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Increases the amount of blocks you can walk over without jumping

## Overview

| Property | Value |
|----------|-------|
| Type ID | `increase_step_height` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `height` | The extra step height |

## Configuration Example

```yaml
- id: increase_step_height
  args:
    height: 1 # The extra step height
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
