---
title: pet_xp_multiplier
titleZh: pet_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# pet_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Multiplies pet xp gain

> **Requires:** EcoPets

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pet_xp_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The experience multiplier |
| `pets` | The list of pets to multiply xp for. If removed, it will multiply all pets. |

## Configuration Example

```yaml
- id: pet_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    pets: # The list of pets to multiply xp for. If removed, it will multiply all pets.
      - tiger
      - golem
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
