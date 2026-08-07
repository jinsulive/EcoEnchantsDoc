---
title: give_xp
titleZh: give_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives experience points

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_xp` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of xp to give |
| `apply_mending` | PAPER ONLY - If mending should be applied from the xp |

## Configuration Example

```yaml
- id: give_xp
  args:
    amount: 100 # The amount of xp to give
    apply_mending: true # PAPER ONLY - If mending should be applied from the xp
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
