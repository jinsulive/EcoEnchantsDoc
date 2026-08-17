---
title: mine_block_cascade
titleZh: mine_block_cascade
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# mine_block_cascade <Badge type="info" text="libreforge" /> 

> Fires for each block broken in a cascading plant break, such as sugar cane, bamboo, kelp, or chorus.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mine_block_cascade` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMineBlockCascade.kt`).

- **Source Description**: Fires for each block broken in a cascading plant break, such as sugar cane, bamboo, kelp, or chorus.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - mine_block_cascade
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
