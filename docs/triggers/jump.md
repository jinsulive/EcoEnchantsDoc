---
title: jump
titleZh: jump
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# jump <Badge type="info" text="libreforge" /> 

> Triggered when Jumping (pressing space)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `jump` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerJump.kt`).

- **Source Description**: Fires when the player jumps.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `VELOCITY`

## Configuration Example

```yaml
triggers:
  - jump
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
