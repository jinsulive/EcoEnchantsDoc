---
title: brew_ingredient
titleZh: brew_ingredient
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# brew_ingredient <Badge type="info" text="libreforge" /> 

> Fires when an ingredient finishes brewing in a brewing stand.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `brew_ingredient` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBrewIngredient.kt`).

- **Source Description**: Fires when an ingredient finishes brewing in a brewing stand.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The number of potions brewed.

## Configuration Example

```yaml
triggers:
  - brew_ingredient
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
