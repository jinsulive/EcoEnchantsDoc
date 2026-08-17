---
title: multiply_edprison_economy
titleZh: multiply_edprison_economy
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# multiply_edprison_economy <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Multiplies incoming EdPrison economy.

> **Requires:** EdPrison

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_edprison_economy` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The xp multiplier |
| `economies` | The economy types to multiply |

## Configuration Example

```yaml
- id: edprison_economy_multiplier
  args:
    multiplier: 1.5 # The xp multiplier
    economies: # The economy types to multiply
      - blocks
      - tokens
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
