---
title: gain_xp
titleZh: gain_xp
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# gain_xp <Badge type="info" text="libreforge" /> 

> Fires when the player gains experience points.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_xp` |
| Module | libreforge |
| Category | Internal |
| Value | The xp gained |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerGainXp.kt`).

- **Source Description**: Fires when the player gains experience points.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `VALUE`
- **Value**: The amount of experience gained.

## Configuration Example

```yaml
triggers:
  - gain_xp
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The xp gained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
