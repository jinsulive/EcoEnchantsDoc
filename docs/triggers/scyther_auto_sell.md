---
title: scyther_auto_sell
titleZh: scyther_auto_sell
category: triggers
subcategory: external
tags:
  - libreforge
  - scyther
outline: deep
---

# scyther_auto_sell <Badge type="info" text="libreforge" /> <Badge type="warning" text="Scyther" />

> Triggered when autoselling crops with a scyther hoe

## Overview

| Property | Value |
|----------|-------|
| Type ID | `scyther_auto_sell` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | Scyther |

## Configuration Example

```yaml
triggers:
  - scyther_auto_sell
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
