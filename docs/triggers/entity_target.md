---
title: entity_target
titleZh: entity_target
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_target <Badge type="info" text="libreforge" /> 

> Fires when an entity selects a new target.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_target` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityTarget.kt`).

- **Source Description**: Fires when an entity selects a new target.
- **Categories**: `entity`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`

## Configuration Example

```yaml
triggers:
  - entity_target
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
