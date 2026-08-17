---
title: gain_pet_xp
titleZh: gain_pet_xp
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecopets
outline: deep
deprecated: true
---

# gain_pet_xp <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoPets" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Triggered when gaining pet experience points

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_pet_xp` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The experience gained |
| Requires | EcoPets |

## Configuration Example

```yaml
triggers:
  - gain_pet_xp
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The experience gained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
