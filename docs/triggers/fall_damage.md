---
title: fall_damage
titleZh: fall_damage
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# fall_damage <Badge type="info" text="libreforge" /> 

> Triggered when taking fall damage

## Overview

| Property | Value |
|----------|-------|
| Type ID | `fall_damage` |
| Module | libreforge |
| Category | Internal |
| Value | The damage taken |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerFallDamage.kt`).

- **Source Description**: Fires when an entity takes fall damage.
- **Categories**: `combat`, `movement`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `VALUE`
- **Value**: The fall damage taken.

## Configuration Example

```yaml
triggers:
  - fall_damage
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
