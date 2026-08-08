---
title: consume
titleZh: consume
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# consume <Badge type="info" text="libreforge" /> 

> Triggered on item consumption

## Overview

| Property | Value |
|----------|-------|
| Type ID | `consume` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerConsume.kt`).

- **Source Description**: Fires when the player consumes a food or potion item.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - consume
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
