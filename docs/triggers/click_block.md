---
title: click_block
titleZh: click_block
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# click_block <Badge type="info" text="libreforge" /> 

> Fires when the player clicks on a block.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `click_block` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerClickBlock.kt`).

- **Source Description**: Fires when the player clicks on a block.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - click_block
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
