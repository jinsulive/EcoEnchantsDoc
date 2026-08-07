---
title: knockback_multiplier
titleZh: knockback_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# knockback_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies attack knockback

## Overview

| Property | Value |
|----------|-------|
| Type ID | `knockback_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for attack knockback |

## Configuration Example

```yaml
- id: knockback_multiplier
  args:
    multiplier: 2 # The multiplier for attack knockback
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
