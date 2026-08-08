---
title: click_entity
titleZh: click_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# click_entity <Badge type="info" text="libreforge" /> 

> Triggered when right-clicking on an entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `click_entity` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerClickEntity.kt`).

- **Source Description**: Fires when the player right-clicks a living entity.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - click_entity
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
