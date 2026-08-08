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

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerProjectileLaunch.kt`).

- **Source Description**: Fires when the player launches a projectile.
- **Categories**: `combat`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `PROJECTILE`, `VELOCITY`

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
