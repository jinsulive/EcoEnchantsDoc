---
title: entity_catch_fire_from_block
titleZh: entity_catch_fire_from_block
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_catch_fire_from_block <Badge type="info" text="libreforge" /> 

> Fires when an entity catches fire from a block such as lava.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_catch_fire_from_block` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityCatchFireFromBlock.kt`).

- **Source Description**: Fires when an entity catches fire from a block such as lava.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - entity_catch_fire_from_block
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
