---
title: gain_hunger
titleZh: gain_hunger
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# gain_hunger <Badge type="info" text="libreforge" /> 

> Fires when the player's food level increases.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_hunger` |
| Module | libreforge |
| Category | Internal |
| Value | The hunger gained |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerGainHunger.kt`).

- **Source Description**: Fires when the player's food level increases.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `VALUE`
- **Value**: The amount of food level gained.

## Configuration Example

```yaml
triggers:
  - gain_hunger
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The hunger gained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
