---
title: give_lands_balance
titleZh: give_lands_balance
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_lands_balance <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Give money to a Land's bank balance

> **Requires:** Lands

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_lands_balance` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount to give, use negative values to take |
| `only_trusted` | If only trusted players can use this effect |

## Configuration Example

```yaml
- id: give_lands_balance
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
