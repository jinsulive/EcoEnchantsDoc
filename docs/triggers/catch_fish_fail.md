---
title: catch_fish_fail
titleZh: catch_fish_fail
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# catch_fish_fail <Badge type="info" text="libreforge" /> 

> Triggered when failing to catch a fish

## Overview

| Property | Value |
|----------|-------|
| Type ID | `catch_fish_fail` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - catch_fish_fail
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
