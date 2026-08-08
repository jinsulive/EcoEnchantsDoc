---
title: block_xp_drop
titleZh: block_xp_drop
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# block_xp_drop <Badge type="info" text="libreforge" /> 

> Fires when a block broken by the player drops experience.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `block_xp_drop` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of XP dropped |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBlockXpDrop.kt`).

- **Source Description**: Fires when a block broken by the player drops experience.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`, `VALUE`
- **Value**: The amount of XP dropped.

## Configuration Example

```yaml
triggers:
  - block_xp_drop
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
