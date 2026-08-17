---
title: send_message
titleZh: send_message
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# send_message <Badge type="info" text="libreforge" /> 

> Fires when the player sends a chat message.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `send_message` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerSendMessage.kt`).

- **Source Description**: Fires when the player sends a chat message.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `TEXT`

## Configuration Example

```yaml
triggers:
  - send_message
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
