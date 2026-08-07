---
title: jump_strength_multiplier
titleZh: jump_strength_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# jump_strength_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies jump strength

## Overview

| Property | Value |
|----------|-------|
| Type ID | `jump_strength_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for jump strength |

## Configuration Example

```yaml
- id: jump_strength_multiplier
  args:
    multiplier: 2.1 # The multiplier for jump strength
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
