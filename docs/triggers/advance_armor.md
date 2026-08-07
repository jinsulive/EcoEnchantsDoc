---
title: advance_armor
titleZh: advance_armor
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoarmor
outline: deep
---

# advance_armor <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoArmor" />

> Triggered when a player advances an armor set

## Overview

| Property | Value |
|----------|-------|
| Type ID | `advance_armor` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoArmor |

## Configuration Example

```yaml
triggers:
  - advance_armor
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
