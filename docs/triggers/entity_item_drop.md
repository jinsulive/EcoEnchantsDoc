---
title: entity_item_drop
titleZh: entity_item_drop
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_item_drop <Badge type="info" text="libreforge" /> 

> Triggered when a killed entity drops loot

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_item_drop` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of items dropped |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityItemDrop.kt`).

- **Source Description**: Fires when the player kills an entity and the entity drops items.
- **Categories**: `entity`, `combat`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The number of items dropped.

## Configuration Example

```yaml
triggers:
  - entity_item_drop
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The amount of items dropped |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
