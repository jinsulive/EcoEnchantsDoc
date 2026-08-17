---
title: lose_potion_effect
titleZh: lose_potion_effect
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# lose_potion_effect <Badge type="info" text="libreforge" /> 

> Fires when an entity loses a potion effect.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lose_potion_effect` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerLosePotionEffect.kt`).

- **Source Description**: Fires when an entity loses a potion effect.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - lose_potion_effect
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
