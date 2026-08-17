---
title: enter_region
titleZh: enter_region
category: triggers
subcategory: external
tags:
  - libreforge
  - worldguard
outline: deep
---

# enter_region <Badge type="info" text="libreforge" /> <Badge type="warning" text="WorldGuard" />
> **Requires:** WorldGuard

> Fires when the player enters a WorldGuard region.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `enter_region` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | WorldGuard |

## Configuration Example

```yaml
triggers:
  - enter_region
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
