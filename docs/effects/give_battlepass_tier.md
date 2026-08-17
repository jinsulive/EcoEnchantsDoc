---
title: give_battlepass_tier
titleZh: give_battlepass_tier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# give_battlepass_tier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Give battlepass tiers to the player.

> **Requires:** EcoBattlepass

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_battlepass_tier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of tiers to give |
| `battlepass` | The battlepass ID |

## Configuration Example

```yaml
- id: give_battlepass_tier
  args:
    amount: 2 # The amount of tiers to give
    battlepass: example # The battlepass ID
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
