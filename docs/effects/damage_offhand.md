---
title: damage_offhand
titleZh: damage_offhand
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_offhand <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damage a victim's offhand item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_offhand` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The amount of damage to deal |

## Configuration Example

```yaml
- id: damage_offhand
  args:
    damage: 1 # The amount of damage to deal
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
