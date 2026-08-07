---
title: gain_xp
titleZh: gain_xp
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# gain_xp <Badge type="info" text="libreforge" /> 

> Triggered when gaining experience points

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_xp` |
| Module | libreforge |
| Category | Internal |
| Value | The xp gained |

## Configuration Example

```yaml
triggers:
  - gain_xp
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The xp gained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
