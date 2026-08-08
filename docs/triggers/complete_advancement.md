---
title: complete_advancement
titleZh: complete_advancement
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# complete_advancement <Badge type="info" text="libreforge" /> 

> Triggered when completing an advancement

## Overview

| Property | Value |
|----------|-------|
| Type ID | `complete_advancement` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerCompleteAdvancement.kt`).

- **Source Description**: Fires when the player completes an advancement.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `TEXT`

## Configuration Example

```yaml
triggers:
  - complete_advancement
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
