---
title: magic_regen_multiplier
titleZh: magic_regen_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# magic_regen_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies magic regeneration

> **Requires:** EcoSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `magic_regen_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The regen multiplier |
| `types` | The list of magic types to multiply xp for. If removed, it will multiply all types. |

## Configuration Example

```yaml
- id: magic_regen_multiplier
  args:
    multiplier: 1.5 # The regen multiplier
    types: # The list of magic types to multiply xp for. If removed, it will multiply all types.
      - mana
      - flux
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
