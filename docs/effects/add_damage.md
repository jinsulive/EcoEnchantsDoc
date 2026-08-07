---
title: add_damage
titleZh: add_damage
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# add_damage <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Adds incoming or outgoing damage from any damage trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_damage` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The damage to add (or subtract) |

## Configuration Example

```yaml
- id: add_damage
  args:
    damage: 2 # The damage to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
