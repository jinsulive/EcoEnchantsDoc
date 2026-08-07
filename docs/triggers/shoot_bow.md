---
title: shoot_bow
titleZh: shoot_bow
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# shoot_bow <Badge type="info" text="libreforge" /> 

> Triggered when shooting a bow

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shoot_bow` |
| Module | libreforge |
| Category | Internal |
| Value | The force the bow was shot at between 0 and 1 |

## Configuration Example

```yaml
triggers:
  - shoot_bow
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The force the bow was shot at between 0 and 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
