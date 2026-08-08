---
title: catch_entity
titleZh: catch_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# catch_entity <Badge type="info" text="libreforge" /> 

> Triggered when hooking onto an entity with a fishing rod

## Overview

| Property | Value |
|----------|-------|
| Type ID | `catch_entity` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerCatchEntity.kt`).

- **Source Description**: Fires when the player catches a living entity with a fishing rod.
- **Categories**: `fishing`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - catch_entity
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
