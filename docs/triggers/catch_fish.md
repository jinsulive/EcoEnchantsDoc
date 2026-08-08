---
title: catch_fish
titleZh: catch_fish
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# catch_fish <Badge type="info" text="libreforge" /> 

> Triggered when catching a fish

## Overview

| Property | Value |
|----------|-------|
| Type ID | `catch_fish` |
| Module | libreforge |
| Category | Internal |
| Value | The experience dropped |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerCatchFish.kt`).

- **Source Description**: Fires when the player successfully catches a fish.
- **Categories**: `fishing`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The amount of XP dropped.

## Configuration Example

```yaml
triggers:
  - catch_fish
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The experience dropped |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
