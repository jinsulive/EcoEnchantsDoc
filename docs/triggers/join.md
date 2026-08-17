---
title: join
titleZh: join
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# join <Badge type="info" text="libreforge" /> 

> Fires when the player joins the server.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `join` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerJoin.kt`).

- **Source Description**: Fires when the player joins the server.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - join
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
