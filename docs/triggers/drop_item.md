---
title: drop_item
titleZh: drop_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# drop_item <Badge type="info" text="libreforge" /> 

> Triggered when dropping an item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_item` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of items |

## Configuration Example

```yaml
triggers:
  - drop_item
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
