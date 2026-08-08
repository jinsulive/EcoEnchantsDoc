---
title: trident_hit
titleZh: trident_hit
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# trident_hit <Badge type="info" text="libreforge" /> 

> Triggered when hitting a block or an entity with a thrown trident

## Overview

| Property | Value |
|----------|-------|
| Type ID | `trident_hit` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerTridentHit.kt`).

- **Source Description**: Fires when the player's thrown trident hits a block or entity.
- **Categories**: `combat`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `BLOCK`, `EVENT`, `LOCATION`, `PROJECTILE`, `VELOCITY`

## Configuration Example

```yaml
triggers:
  - trident_hit
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
