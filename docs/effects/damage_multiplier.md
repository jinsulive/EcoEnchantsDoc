---
title: damage_multiplier
titleZh: damage_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies incoming or outgoing damage from any damage trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier |

## Configuration Example

```yaml
- id: damage_multiplier
  args:
    multiplier: 0.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
