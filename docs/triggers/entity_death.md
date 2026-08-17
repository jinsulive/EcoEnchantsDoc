---
title: entity_death
titleZh: entity_death
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_death <Badge type="info" text="libreforge" /> 

> Fires when any living entity dies.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_death` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEntityDeath.kt`).

- **Source Description**: Fires when any living entity dies.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - entity_death
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
