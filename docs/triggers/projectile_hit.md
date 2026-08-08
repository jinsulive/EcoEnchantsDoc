---
title: projectile_hit
titleZh: projectile_hit
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# projectile_hit <Badge type="info" text="libreforge" /> 

> Triggered when hitting a block or an entity with a projectile (arrow, trident, splash potion, egg, snowball)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `projectile_hit` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerProjectileHit.kt`).

- **Source Description**: Fires when the player's projectile hits a block or entity.
- **Categories**: `combat`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `BLOCK`, `EVENT`, `LOCATION`, `PROJECTILE`, `VELOCITY`

## Configuration Example

```yaml
triggers:
  - projectile_hit
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
