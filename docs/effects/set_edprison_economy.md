---
title: set_edprison_economy
titleZh: set_edprison_economy
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_edprison_economy <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the EdPrison economy for the player

> **Requires:** EdPrison

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_edprison_economy` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | the ID of the economy type |
| `amount` | The amount to set |

## Configuration Example

```yaml
- id: set_edprison_economy
  args:
    type: blocks # the ID of the economy type
    amount: 100 # The amount to set
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
