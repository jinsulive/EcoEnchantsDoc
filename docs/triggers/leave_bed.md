---
title: leave_bed
titleZh: leave_bed
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# leave_bed <Badge type="info" text="libreforge" /> 

> Fires when the player leaves a bed.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `leave_bed` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerLeaveBed.kt`).

- **Source Description**: Fires when the player leaves a bed.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - leave_bed
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
