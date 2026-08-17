---
title: enter_bed
titleZh: enter_bed
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# enter_bed <Badge type="info" text="libreforge" /> 

> Fires when the player enters a bed.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `enter_bed` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEnterBed.kt`).

- **Source Description**: Fires when the player enters a bed.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - enter_bed
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
