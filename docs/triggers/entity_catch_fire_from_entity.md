---
title: entity_catch_fire_from_entity
titleZh: entity_catch_fire_from_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_catch_fire_from_entity <Badge type="info" text="libreforge" /> 

> Triggered when an entity catches fire from an entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_catch_fire_from_entity` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityCatchFireFromEntity.kt`).

- **Source Description**: Fires when an entity catches fire caused by another entity.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - entity_catch_fire_from_entity
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
