---
title: place_block
titleZh: place_block
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# place_block <Badge type="info" text="libreforge" /> 

> Triggered when placing a block

## Overview

| Property | Value |
|----------|-------|
| Type ID | `place_block` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerPlaceBlock.kt`).

- **Source Description**: Fires when the player places a block.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - place_block
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
