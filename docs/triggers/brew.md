---
title: brew
titleZh: brew
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# brew <Badge type="info" text="libreforge" /> 

> Triggered when brewing a potion in a brewing stand

## Overview

| Property | Value |
|----------|-------|
| Type ID | `brew` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBrew.kt`).

- **Source Description**: Fires when the player brews potions in a brewing stand.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The number of potions brewed.

## Configuration Example

```yaml
triggers:
  - brew
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
