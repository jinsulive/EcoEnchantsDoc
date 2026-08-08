---
title: win_raid
titleZh: win_raid
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# win_raid <Badge type="info" text="libreforge" /> 

> Triggered when a player wins a raid

## Overview

| Property | Value |
|----------|-------|
| Type ID | `win_raid` |
| Module | libreforge |
| Category | Internal |
| Value | The level of bad omen |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerWinRaid.kt`).

- **Source Description**: Fires when the player wins a raid.
- **Categories**: `combat`, `world`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`, `VALUE`
- **Value**: The bad omen level of the raid, plus one.

## Configuration Example

```yaml
triggers:
  - win_raid
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The level of bad omen |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
