---
title: leave
titleZh: leave
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# leave <Badge type="info" text="libreforge" /> 

> Triggered when leaving the server

## Overview

| Property | Value |
|----------|-------|
| Type ID | `leave` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - leave
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
