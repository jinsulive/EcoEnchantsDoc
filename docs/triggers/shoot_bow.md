---
title: shoot_bow
titleZh: shoot_bow
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# shoot_bow <Badge type="info" text="libreforge" /> 

> Fires when the player shoots a bow or crossbow.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shoot_bow` |
| Module | libreforge |
| Category | Internal |
| Value | The force the bow was shot at between 0 and 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerShootBow.kt`).

- **Source Description**: Fires when the player shoots a bow or crossbow.
- **Categories**: `combat`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `PROJECTILE`, `VELOCITY`, `VALUE`, `LOCATION`
- **Value**: The draw force of the bow.

## Configuration Example

```yaml
triggers:
  - shoot_bow
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The force the bow was shot at between 0 and 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
