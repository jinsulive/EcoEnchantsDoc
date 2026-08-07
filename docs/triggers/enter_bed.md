---
title: enter_bed
titleZh: enter_bed
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# enter_bed <Badge type="info" text="libreforge" /> 

> Triggered when entering a bed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `enter_bed` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - enter_bed
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
