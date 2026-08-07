---
title: pick_up_item
titleZh: pick_up_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# pick_up_item <Badge type="info" text="libreforge" /> 

> Triggered when picking up an item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pick_up_item` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of items |

## Configuration Example

```yaml
triggers:
  - pick_up_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The amount of items |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
