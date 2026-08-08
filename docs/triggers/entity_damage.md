---
title: entity_damage
titleZh: entity_damage
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_damage <Badge type="info" text="libreforge" /> 

> Triggered when an entity takes damage

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_damage` |
| Module | libreforge |
| Category | Internal |
| Value | The damage taken |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityDamage.kt`).

- **Source Description**: Fires when any entity takes damage from any source.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`, `LOCATION`, `VALUE`
- **Value**: The damage dealt.

## Configuration Example

```yaml
triggers:
  - entity_damage
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
