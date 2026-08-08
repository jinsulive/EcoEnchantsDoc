---
title: smelt
titleZh: smelt
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# smelt <Badge type="info" text="libreforge" /> 

> Triggered when smelting an item in a furnace

## Overview

| Property | Value |
|----------|-------|
| Type ID | `smelt` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of items smelted |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerSmelt.kt`).

- **Source Description**: Fires when the player smelts an item in a furnace.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The number of items produced.

## Configuration Example

```yaml
triggers:
  - smelt
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The amount of items smelted |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
