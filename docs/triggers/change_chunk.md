---
title: change_chunk
titleZh: change_chunk
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# change_chunk <Badge type="info" text="libreforge" /> 

> Fires when the player or a living entity moves into a different chunk.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `change_chunk` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerChangeChunk.kt`).

- **Source Description**: Fires when the player or a living entity moves into a different chunk.
- **Categories**: `world`, `movement`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `VELOCITY`, `ITEM`

## Configuration Example

```yaml
triggers:
  - change_chunk
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
