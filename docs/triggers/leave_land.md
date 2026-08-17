---
title: leave_land
titleZh: leave_land
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# leave_land <Badge type="info" text="libreforge" /> 
> **Requires:** Lands

> Fires when the player leaves a Lands land membership.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `leave_land` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - leave_land
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
