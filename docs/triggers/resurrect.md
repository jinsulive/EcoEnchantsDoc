---
title: resurrect
titleZh: resurrect
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# resurrect <Badge type="info" text="libreforge" /> 

> Triggered when a Totem activates

## Overview

| Property | Value |
|----------|-------|
| Type ID | `resurrect` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerResurrect.kt`).

- **Source Description**: Fires when the player is resurrected by a totem of undying.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - resurrect
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
