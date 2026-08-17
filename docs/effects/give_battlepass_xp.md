---
title: give_battlepass_xp
titleZh: give_battlepass_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# give_battlepass_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Give battlepass experience points

> **Requires:** EcoBattlepass

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_battlepass_xp` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of xp to give |
| `battlepass` | The battlepass ID |

## Configuration Example

```yaml
- id: give_battlepass_xp
  args:
    amount: 100 # The amount of xp to give
    battlepass: example # The battlepass ID
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
