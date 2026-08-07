---
title: elytra_boost
titleZh: elytra_boost
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# elytra_boost <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />

> Triggered when a player boosts an elytra

## Overview

| Property | Value |
|----------|-------|
| Type ID | `elytra_boost` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |
| Requires | Paper |

## Configuration Example

```yaml
triggers:
  - elytra_boost
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
