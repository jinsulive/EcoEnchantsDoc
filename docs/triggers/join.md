---
title: join
titleZh: join
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# join <Badge type="info" text="libreforge" /> 

> Triggered when joining the server

## Overview

| Property | Value |
|----------|-------|
| Type ID | `join` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - join
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
