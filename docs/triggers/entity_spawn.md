---
title: entity_spawn
titleZh: entity_spawn
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_spawn <Badge type="info" text="libreforge" /> 

> Fires when any entity spawns in the world.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_spawn` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntitySpawn.kt`).

- **Source Description**: Fires when any entity spawns in the world.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - entity_spawn
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
