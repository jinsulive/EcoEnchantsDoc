---
title: set_lands_balance
titleZh: set_lands_balance
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_lands_balance <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Set the Land bank's balance

> **Requires:** Lands

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_lands_balance` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount to give, use negative values to take |
| `only_trusted` | (Optional) If only trusted players can use this effect. Defaults to true. |

## Configuration Example

```yaml
- id: set_lands_balance
  args:
      amount: 1000 # The amount to give, use negative values to take
      only_trusted: true # (Optional) If only trusted players can use this effect. Defaults to true.
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
