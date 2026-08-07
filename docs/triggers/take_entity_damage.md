---
title: take_entity_damage
titleZh: take_entity_damage
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# take_entity_damage <Badge type="info" text="libreforge" /> 

> Triggered when taking damage from an entity or player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `take_entity_damage` |
| Module | libreforge |
| Category | Internal |
| Value | The damage taken |

## Configuration Example

```yaml
triggers:
  - take_entity_damage
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
