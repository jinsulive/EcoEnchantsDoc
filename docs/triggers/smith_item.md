---
title: smith_item
titleZh: smith_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# smith_item <Badge type="info" text="libreforge" /> 

> Triggered when smithing an item in a smithing table

## Overview

| Property | Value |
|----------|-------|
| Type ID | `smith_item` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - smith_item
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
