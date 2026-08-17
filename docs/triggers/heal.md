---
title: heal
titleZh: heal
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# heal <Badge type="info" text="libreforge" /> 

> Fires when the player regains health.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `heal` |
| Module | libreforge |
| Category | Internal |
| Value | The health regained |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerHeal.kt`).

- **Source Description**: Fires when the player regains health.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `VALUE`
- **Value**: The amount of health regained.

## Configuration Example

```yaml
triggers:
  - heal
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The health regained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
