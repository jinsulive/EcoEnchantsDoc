---
title: movement_efficiency_multiplier
titleZh: movement_efficiency_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# movement_efficiency_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies movement speed through difficult terrain

## Overview

| Property | Value |
|----------|-------|
| Type ID | `movement_efficiency_multiplier` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for movement efficiency |

## Configuration Example

```yaml
- id: movement_efficiency_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement efficiency
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
