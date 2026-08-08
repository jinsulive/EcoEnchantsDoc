---
title: change_world
titleZh: change_world
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# change_world <Badge type="info" text="libreforge" /> 

> Triggered when changing world

## Overview

| Property | Value |
|----------|-------|
| Type ID | `change_world` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerChangeWorld.kt`).

- **Source Description**: Fires when the player moves to a different world.
- **Categories**: `movement`, `world`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `VELOCITY`, `ITEM`, `TEXT`

## Configuration Example

```yaml
triggers:
  - change_world
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
