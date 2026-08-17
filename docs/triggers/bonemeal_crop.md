---
title: bonemeal_crop
titleZh: bonemeal_crop
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# bonemeal_crop <Badge type="info" text="libreforge" /> 

> Fires when the player uses bone meal to fertilize a crop.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `bonemeal_crop` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBoneMealCrop.kt`).

- **Source Description**: Fires when the player uses bone meal to fertilize a crop.
- **Categories**: `world`, `interaction`
- **Requires Trigger Data**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - bonemeal_crop
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
