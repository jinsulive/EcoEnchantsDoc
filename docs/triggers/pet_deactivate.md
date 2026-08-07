---
title: pet_deactivate
titleZh: pet_deactivate
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecopets
outline: deep
---

# pet_deactivate <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoPets" />

> Triggered when deactivating a pet

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pet_deactivate` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoPets |

## Configuration Example

```yaml
triggers:
  - pet_deactivate
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
