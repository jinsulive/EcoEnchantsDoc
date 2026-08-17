---
title: take_damage
titleZh: take_damage
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# take_damage <Badge type="info" text="libreforge" /> 

> Fires when the player takes any damage.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `take_damage` |
| Module | libreforge |
| Category | Internal |
| Value | The damage taken |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerTakeDamage.kt`).

- **Source Description**: Fires when the player takes any damage.
- **Categories**: `combat`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `VALUE`
- **Value**: The final damage taken.

## Configuration Example

```yaml
triggers:
  - take_damage
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage taken |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
