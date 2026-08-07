---
title: set_saturation
titleZh: set_saturation
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_saturation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the player's saturation

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_saturation` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The saturation level to set |

## Configuration Example

```yaml
- id: set_saturation
  args:
    amount: 10.0 # The saturation level to set
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
