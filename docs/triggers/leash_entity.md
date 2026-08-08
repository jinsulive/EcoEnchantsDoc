---
title: leash_entity
titleZh: leash_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# leash_entity <Badge type="info" text="libreforge" /> 

> Triggered when leashing an entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `leash_entity` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerLeashEntity.kt`).

- **Source Description**: Fires when the player leashes an entity with a lead.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - leash_entity
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
