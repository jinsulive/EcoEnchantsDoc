---
title: teleport
titleZh: teleport
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# teleport <Badge type="info" text="libreforge" /> 

> Triggered when teleporting

## Overview

| Property | Value |
|----------|-------|
| Type ID | `teleport` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerTeleport.kt`).

- **Source Description**: Fires when the player teleports.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`, `TEXT`

## Configuration Example

```yaml
triggers:
  - teleport
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
