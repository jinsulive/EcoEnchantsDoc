---
title: toggle_flight
titleZh: toggle_flight
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# toggle_flight <Badge type="info" text="libreforge" /> 

> Triggered when changing the flight state

## Overview

| Property | Value |
|----------|-------|
| Type ID | `toggle_flight` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - toggle_flight
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
