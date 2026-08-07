---
title: give_mob_coins
titleZh: give_mob_coins
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_mob_coins <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Give the player mob coins

> **Requires:** UltimateMobCoins

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_mob_coins` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of mob coins to give |

## Configuration Example

```yaml
- id: give_mob_coins
  args:
    amount: 10 # The amount of mob coins to give
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
