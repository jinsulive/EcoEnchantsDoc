---
title: leave_region
titleZh: leave_region
category: triggers
subcategory: external
tags:
  - libreforge
  - worldguard
outline: deep
---

# leave_region <Badge type="info" text="libreforge" /> <Badge type="warning" text="WorldGuard" />

> Triggered when leaving a region

## Overview

| Property | Value |
|----------|-------|
| Type ID | `leave_region` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | WorldGuard |

## Configuration Example

```yaml
triggers:
  - leave_region
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
