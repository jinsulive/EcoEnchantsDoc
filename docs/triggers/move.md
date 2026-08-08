---
title: move
titleZh: move
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# move <Badge type="info" text="libreforge" /> 

> Triggered on all movement: looking around, walking

## Overview

| Property | Value |
|----------|-------|
| Type ID | `move` |
| Module | libreforge |
| Category | Internal |
| Value | The distance moved |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMove.kt`).

- **Source Description**: Fires when the player or a living entity moves to a new block.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `VELOCITY`, `ITEM`, `VALUE`
- **Value**: The distance moved.

## Configuration Example

```yaml
triggers:
  - move
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The distance moved |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
