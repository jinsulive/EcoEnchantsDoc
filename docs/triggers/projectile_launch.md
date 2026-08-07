---
title: projectile_launch
titleZh: projectile_launch
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# projectile_launch <Badge type="info" text="libreforge" /> 

> Triggered when launching a projectile (arrow, trident, splash potion, egg, snowball)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `projectile_launch` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - projectile_launch
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
