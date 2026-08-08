---
title: drink
titleZh: drink
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# drink <Badge type="info" text="libreforge" /> 

> Fires when the player drinks a potion, honey bottle, milk bucket or stew.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drink` |
| Module | libreforge |
| Category | Internal |
| Value | `1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerDrink.kt`).

- **Source Description**: Fires when the player drinks a potion, honey bottle, milk bucket or stew.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `ITEM`

## Configuration Example

```yaml
triggers:
  - drink
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | `1` |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
