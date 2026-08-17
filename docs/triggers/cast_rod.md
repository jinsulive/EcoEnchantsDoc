---
title: cast_rod
titleZh: cast_rod
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# cast_rod <Badge type="info" text="libreforge" /> 

> Fires when the player casts a fishing rod.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `cast_rod` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerCastRod.kt`).

- **Source Description**: Fires when the player casts a fishing rod.
- **Categories**: `fishing`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - cast_rod
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
