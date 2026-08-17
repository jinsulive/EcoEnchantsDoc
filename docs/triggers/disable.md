---
title: disable
titleZh: disable
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# disable <Badge type="info" text="libreforge" /> 

> Fires when a holder is deactivated for the dispatcher, such as when an item is unequipped.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `disable` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerDisable.kt`).

- **Source Description**: Fires when a holder is deactivated for the dispatcher, such as when an item is unequipped.
- **Categories**: `meta`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`

## Configuration Example

```yaml
triggers:
  - disable
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
