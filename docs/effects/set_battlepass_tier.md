---
title: set_battlepass_tier
titleZh: set_battlepass_tier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_battlepass_tier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Set the player's battlepass tier

> **Requires:** EcoBattlepass

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_battlepass_tier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `tier` | The tier to set |
| `battlepass` | The battlepass ID |

## Configuration Example

```yaml
- id: set_battlepass_tier
  args:
    tier: 10 # The tier to set
    battlepass: example # The battlepass ID
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
