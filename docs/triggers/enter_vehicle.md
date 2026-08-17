---
title: enter_vehicle
titleZh: enter_vehicle
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# enter_vehicle <Badge type="info" text="libreforge" /> 

> Fires when the player enters a vehicle.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `enter_vehicle` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEnterVehicle.kt`).

- **Source Description**: Fires when the player enters a vehicle.
- **Categories**: `interaction`, `movement`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - enter_vehicle
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
