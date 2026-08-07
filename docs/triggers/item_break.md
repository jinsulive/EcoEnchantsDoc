---
title: item_break
titleZh: item_break
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# item_break <Badge type="info" text="libreforge" /> 

> Triggered when breaking any item in your inventory (durability)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_break` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - item_break
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
