---
title: cauldron_level_change
titleZh: cauldron_level_change
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# cauldron_level_change <Badge type="info" text="libreforge" /> 

> Fires when the player changes the water level of a cauldron.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `cauldron_level_change` |
| Module | libreforge |
| Category | Internal |
| Value | The new cauldron level |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerCauldronLevelChange.kt`).

- **Source Description**: Fires when the player changes the water level of a cauldron.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`, `VALUE`
- **Value**: The new water level of the cauldron after the change.

## Configuration Example

```yaml
triggers:
  - cauldron_level_change
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new cauldron level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
