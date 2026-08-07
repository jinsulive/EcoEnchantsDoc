---
title: sell_item
titleZh: sell_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# sell_item <Badge type="info" text="libreforge" /> 

> Triggered when selling an item in a shop

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sell_item` |
| Module | libreforge |
| Category | Internal |
| Value | The price |

## Configuration Example

```yaml
triggers:
  - sell_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The price |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
