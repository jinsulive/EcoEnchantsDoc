---
title: entity_xp_drop
titleZh: entity_xp_drop
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_xp_drop <Badge type="info" text="libreforge" /> 

> Fires when an entity killed by the player drops experience.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_xp_drop` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of XP dropped |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityXpDrop.kt`).

- **Source Description**: Fires when an entity killed by the player drops experience.
- **Categories**: `combat`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `VALUE`
- **Value**: The amount of XP dropped.

## Configuration Example

```yaml
triggers:
  - entity_xp_drop
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The amount of XP dropped |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
