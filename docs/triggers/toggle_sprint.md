---
title: toggle_sprint
titleZh: toggle_sprint
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# toggle_sprint <Badge type="info" text="libreforge" /> 

> Fires when the player toggles sprinting.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `toggle_sprint` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerToggleSprint.kt`).

- **Source Description**: Fires when the player toggles sprinting.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `VELOCITY`

## Configuration Example

```yaml
triggers:
  - toggle_sprint
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
