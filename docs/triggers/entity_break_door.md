---
title: entity_break_door
titleZh: entity_break_door
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_break_door <Badge type="info" text="libreforge" /> 

> Triggered when an entity breaks a door

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_break_door` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityBreakDoor.kt`).

- **Source Description**: Fires when an entity breaks a door.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - entity_break_door
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
