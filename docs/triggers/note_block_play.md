---
title: note_block_play
titleZh: note_block_play
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# note_block_play <Badge type="info" text="libreforge" /> 

> Fires when the player plays a note block.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `note_block_play` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerNoteBlockPlay.kt`).

- **Source Description**: Fires when the player plays a note block.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `BLOCK`, `LOCATION`, `TEXT`

## Configuration Example

```yaml
triggers:
  - note_block_play
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
