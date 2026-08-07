---
title: entity_damage_by_entity
titleZh: entity_damage_by_entity
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_damage_by_entity <Badge type="info" text="libreforge" /> 

> Triggered when an entity takes damage from another entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_damage_by_entity` |
| Module | libreforge |
| Category | Internal |
| Value | The damage taken |

## Configuration Example

```yaml
triggers:
  - entity_damage_by_entity
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage taken |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
