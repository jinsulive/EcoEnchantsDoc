---
title: leave
titleZh: leave
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# leave <Badge type="info" text="libreforge" /> 

> Triggered when leaving the server

## Overview

| Property | Value |
|----------|-------|
| Type ID | `leave` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerLeave.kt`).

- **Source Description**: Fires when the player leaves the server.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - leave
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
