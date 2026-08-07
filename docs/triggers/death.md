---
title: death
titleZh: death
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# death <Badge type="info" text="libreforge" /> 

> Triggered on death from any sources

## Overview

| Property | Value |
|----------|-------|
| Type ID | `death` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - death
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
