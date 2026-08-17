---
title: hook_in_ground
titleZh: hook_in_ground
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# hook_in_ground <Badge type="info" text="libreforge" /> 

> Fires when the player's fishing hook embeds in the ground.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `hook_in_ground` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerHookInGround.kt`).

- **Source Description**: Fires when the player's fishing hook embeds in the ground.
- **Categories**: `fishing`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - hook_in_ground
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
