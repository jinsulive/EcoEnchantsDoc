---
title: shear_entity
titleZh: shear_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# shear_entity <Badge type="info" text="libreforge" /> 

> Triggered when shearing an entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shear_entity` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerShearEntity.kt`).

- **Source Description**: Fires when the player shears a living entity.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The number of items dropped.

## Configuration Example

```yaml
triggers:
  - shear_entity
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
