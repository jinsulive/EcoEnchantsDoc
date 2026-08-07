---
title: gravity_multiplier
titleZh: gravity_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# gravity_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies gravity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gravity_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for gravity |

## Configuration Example

```yaml
- id: gravity_multiplier
  args:
    multiplier: 0.5 # The multiplier for gravity
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
