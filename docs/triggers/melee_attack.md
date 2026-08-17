---
title: melee_attack
titleZh: melee_attack
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# melee_attack <Badge type="info" text="libreforge" /> 

> Fires when the player lands a melee hit on an entity.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `melee_attack` |
| Module | libreforge |
| Category | Internal |
| Value | The damage dealt |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMeleeAttack.kt`).

- **Source Description**: Fires when the player lands a melee hit on an entity.
- **Categories**: `combat`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The damage dealt.

## Configuration Example

```yaml
triggers:
  - melee_attack
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage dealt |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
