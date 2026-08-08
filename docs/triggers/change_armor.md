---
title: change_armor
titleZh: change_armor
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# change_armor <Badge type="info" text="libreforge" /> 

> Triggered when changing armor

## Overview

| Property | Value |
|----------|-------|
| Type ID | `change_armor` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerChangeArmor.kt`).

- **Source Description**: Fires when the player changes their equipped armor.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - change_armor
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
