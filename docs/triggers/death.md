---
title: death
titleZh: death
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# death <Badge type="info" text="libreforge" /> 

> Fires when the player dies.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `death` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerDeath.kt`).

- **Source Description**: Fires when the player dies.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - death
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
