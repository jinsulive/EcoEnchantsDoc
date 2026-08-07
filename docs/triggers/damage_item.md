---
title: damage_item
titleZh: damage_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# damage_item <Badge type="info" text="libreforge" /> 

> Triggered when damaging an item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_item` |
| Module | libreforge |
| Category | Internal |
| Value | The damage |

## Configuration Example

```yaml
triggers:
  - damage_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
