---
title: damage_mainhand
titleZh: damage_mainhand
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_mainhand <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damage a victim's mainhand item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_mainhand` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The amount of damage to deal |

## Configuration Example

```yaml
- id: damage_mainhand
  args:
    damage: 1 # The amount of damage to deal
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
