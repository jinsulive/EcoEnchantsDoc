---
title: shear
titleZh: shear
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# shear <Badge type="info" text="libreforge" /> 

> Fires when the player shears an entity or a block.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shear` |
| Module | libreforge |
| Category | Internal |
| Value | The number of items dropped |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerShear.kt`).

- **Source Description**: Fires when the player shears an entity or a block.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `BLOCK`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The number of items dropped.

## Configuration Example

```yaml
triggers:
  - shear
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The number of items dropped |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
