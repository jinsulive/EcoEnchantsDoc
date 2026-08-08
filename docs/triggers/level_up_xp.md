---
title: level_up_xp
titleZh: level_up_xp
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# level_up_xp <Badge type="info" text="libreforge" /> 

> Triggered when levelling up XP

## Overview

| Property | Value |
|----------|-------|
| Type ID | `level_up_xp` |
| Module | libreforge |
| Category | Internal |
| Value | The new level |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerLevelUpXp.kt`).

- **Source Description**: Fires when the player gains an XP level.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `VALUE`
- **Value**: The player's new XP level.

## Configuration Example

```yaml
triggers:
  - level_up_xp
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
