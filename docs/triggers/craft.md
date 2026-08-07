---
title: craft
titleZh: craft
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# craft <Badge type="info" text="libreforge" /> 

> Triggered when crafting an item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `craft` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of items crafted |

## Configuration Example

```yaml
triggers:
  - craft
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The amount of items crafted |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
