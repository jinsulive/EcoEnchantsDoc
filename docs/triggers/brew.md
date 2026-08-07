---
title: brew
titleZh: brew
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# brew <Badge type="info" text="libreforge" /> 

> Triggered when brewing a potion in a brewing stand

## Overview

| Property | Value |
|----------|-------|
| Type ID | `brew` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - brew
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
