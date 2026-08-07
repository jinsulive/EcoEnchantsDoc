---
title: take_mob_coins
titleZh: take_mob_coins
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# take_mob_coins <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Take mob coins from the player

> **Requires:** UltimateMobCoins

## Overview

| Property | Value |
|----------|-------|
| Type ID | `take_mob_coins` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of mob coins to take |

## Configuration Example

```yaml
- id: take_mob_coins
  args:
    amount: 10 # The amount of mob coins to take
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
