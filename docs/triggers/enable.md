---
title: enable
titleZh: enable
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# enable <Badge type="info" text="libreforge" /> 

> Triggered when an item / enchant / etc enables

## Overview

| Property | Value |
|----------|-------|
| Type ID | `enable` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEnable.kt`).

- **Source Description**: Fires when a holder is activated for the dispatcher, such as when an item is equipped.
- **Categories**: `meta`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`

## Configuration Example

```yaml
triggers:
  - enable
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
