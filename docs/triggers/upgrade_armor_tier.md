---
title: upgrade_armor_tier
titleZh: upgrade_armor_tier
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoarmor
outline: deep
deprecated: true
---

# upgrade_armor_tier <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoArmor" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Triggered when a player upgrades an armor tier

## Overview

| Property | Value |
|----------|-------|
| Type ID | `upgrade_armor_tier` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The tier ID |
| Requires | EcoArmor |

## Configuration Example

```yaml
triggers:
  - upgrade_armor_tier
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The tier ID |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
