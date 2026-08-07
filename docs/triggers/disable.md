---
title: disable
titleZh: disable
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# disable <Badge type="info" text="libreforge" /> 

> Triggered when an item / enchant / etc disables

## Overview

| Property | Value |
|----------|-------|
| Type ID | `disable` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - disable
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
