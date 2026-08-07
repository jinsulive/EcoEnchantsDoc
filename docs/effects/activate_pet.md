---
title: activate_pet
titleZh: activate_pet
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# activate_pet <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Activates the Pet

> **Requires:** EcoPets

## Overview

| Property | Value |
|----------|-------|
| Type ID | `activate_pet` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `pet` | The pet to give the xp for |

## Configuration Example

```yaml
- id: activate_pet
  args:
    pet: ghost_wolf # The pet to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
