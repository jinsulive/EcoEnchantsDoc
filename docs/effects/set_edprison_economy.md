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

> Sets the player's EdPrison economy balance for a given currency to a specific value.

> **Requires:** EdPrison

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_edprison_economy` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The EdPrison economy currency ID to set. |
| `amount` | Expression | ✅ | — | — | The value to set the economy balance to. Supports expressions. |

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
