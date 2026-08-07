---
title: join_land
titleZh: join_land
category: triggers
subcategory: external
tags:
  - libreforge
  - lands
outline: deep
---

# join_land <Badge type="info" text="libreforge" /> <Badge type="warning" text="Lands" />

> Triggered when joining a Land

## Overview

| Property | Value |
|----------|-------|
| Type ID | `join_land` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | Lands |

## Configuration Example

```yaml
triggers:
  - join_land
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
