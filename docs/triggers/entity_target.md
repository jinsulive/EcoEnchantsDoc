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

> Triggered when an entity targets another entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_target` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

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
