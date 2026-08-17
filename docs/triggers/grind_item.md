---
title: grind_item
titleZh: grind_item
category: triggers
subcategory: internal
tags:
  - libreforge
  - purpur
outline: deep
---

# grind_item <Badge type="info" text="libreforge" /> <Badge type="warning" text="Purpur" />
> **Requires:** Purpur

> Fires when the player takes a result from a grindstone.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `grind_item` |
| Module | libreforge |
| Category | Internal |
| Value | The experience gained |
| Requires | Purpur |

## Configuration Example

```yaml
triggers:
  - grind_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The experience gained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
