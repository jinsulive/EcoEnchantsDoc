---
title: give_oxygen
titleZh: give_oxygen
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_oxygen <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Give a player oxygen

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_oxygen` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of oxygen to give (supports negative values) |

## Configuration Example

```yaml
- id: give_oxygen
  args:
    amount: 1 # The amount of oxygen to give (supports negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
