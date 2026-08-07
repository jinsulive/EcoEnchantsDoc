---
title: brew_ingredient
titleZh: brew_ingredient
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# brew_ingredient <Badge type="info" text="libreforge" /> 

> Same as brew, but passes the ingredient as the item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `brew_ingredient` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - brew_ingredient
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
