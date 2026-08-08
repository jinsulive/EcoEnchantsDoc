---
title: mine_block_progress
titleZh: mine_block_progress
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# mine_block_progress <Badge type="info" text="libreforge" /> 

> Triggered when damaging a block

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mine_block_progress` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMineBlockProgress.kt`).

- **Source Description**: Fires each time the player deals a hit of damage to a block while mining.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - mine_block_progress
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
