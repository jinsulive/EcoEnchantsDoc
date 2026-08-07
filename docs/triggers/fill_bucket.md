---
title: fill_bucket
titleZh: fill_bucket
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# fill_bucket <Badge type="info" text="libreforge" /> 

> Triggered when filling a bucket

## Overview

| Property | Value |
|----------|-------|
| Type ID | `fill_bucket` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - fill_bucket
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
