---
title: give_absorption
titleZh: give_absorption
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_absorption <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Adds absorption points to the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_absorption` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The number of absorption points to add |

## Configuration Example

```yaml
- id: give_absorption
  args:
    amount: 4 # The number of absorption points to add
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
