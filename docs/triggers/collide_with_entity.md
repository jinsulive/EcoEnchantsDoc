---
title: collide_with_entity
titleZh: collide_with_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# collide_with_entity <Badge type="info" text="libreforge" /> 

> Triggered when a player collides with another entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `collide_with_entity` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerCollideWithEntity.kt`).

- **Source Description**: Fires when the player physically collides with a nearby entity.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - collide_with_entity
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
