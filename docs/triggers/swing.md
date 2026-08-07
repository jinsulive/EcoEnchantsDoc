---
title: swing
titleZh: swing
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# swing <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />

> Triggered when swinging an item, hand or weapon

## Overview

| Property | Value |
|----------|-------|
| Type ID | `swing` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |
| Requires | Paper |

## Configuration Example

```yaml
triggers:
  - swing
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
