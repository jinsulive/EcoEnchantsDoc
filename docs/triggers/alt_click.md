---
title: alt_click
titleZh: alt_click
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# alt_click <Badge type="info" text="libreforge" /> 

> Fires when the player right-clicks with an item in hand, or left-clicks with a bow, rod, or trident.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `alt_click` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerAltClick.kt`).

- **Source Description**: Fires when the player right-clicks with an item in hand, or left-clicks with a bow, rod, or trident.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `BLOCK`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - alt_click
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
