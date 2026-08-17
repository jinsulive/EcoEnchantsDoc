---
title: mine_block
titleZh: mine_block
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# mine_block <Badge type="info" text="libreforge" /> 

> Fires when the player successfully breaks a block.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mine_block` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMineBlock.kt`).

- **Source Description**: Fires when the player successfully breaks a block.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - mine_block
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
