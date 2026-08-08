---
title: entity_damage_by_entity
titleZh: entity_damage_by_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_damage_by_entity <Badge type="info" text="libreforge" /> 

> Triggered when an entity takes damage from another entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_damage_by_entity` |
| Module | libreforge |
| Category | Internal |
| Value | The damage taken |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityDamageByEntity.kt`).

- **Source Description**: Fires when an entity is damaged by another entity.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`, `LOCATION`, `VALUE`
- **Value**: The damage dealt.

## Configuration Example

```yaml
triggers:
  - entity_damage_by_entity
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage taken |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
