---
title: toggle_sneak
titleZh: toggle_sneak
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# toggle_sneak <Badge type="info" text="libreforge" /> 

> Triggered when changing the sneak state

## Overview

| Property | Value |
|----------|-------|
| Type ID | `toggle_sneak` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerToggleSneak.kt`).

- **Source Description**: Fires when the player toggles sneaking.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `VELOCITY`

## Configuration Example

```yaml
triggers:
  - toggle_sneak
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
