---
title: tame_animal
titleZh: tame_animal
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# tame_animal <Badge type="info" text="libreforge" /> 

> Triggered when taming an animal

## Overview

| Property | Value |
|----------|-------|
| Type ID | `tame_animal` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerTameAnimal.kt`).

- **Source Description**: Fires when the player tames an animal.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - tame_animal
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
