---
title: entity_teleport
titleZh: entity_teleport
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_teleport <Badge type="info" text="libreforge" /> 

> Fires when an entity teleports.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_teleport` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityTeleport.kt`).

- **Source Description**: Fires when an entity teleports.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - entity_teleport
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
