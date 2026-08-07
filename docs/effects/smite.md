---
title: smite
titleZh: smite
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# smite <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Strikes lightning on a victim

## Overview

| Property | Value |
|----------|-------|
| Type ID | `smite` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The damage to deal |
| `silent` | If the lightning should be silent |

## Configuration Example

```yaml
- id: smite
  args:
    damage: 5 # The damage to deal
    silent: true # If the lightning should be silent
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
