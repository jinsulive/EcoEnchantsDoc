---
title: give_edprison_economy
titleZh: give_edprison_economy
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_edprison_economy <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives the player a specified amount of an EdPrison economy currency.

> **Requires:** EdPrison

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_edprison_economy` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The EdPrison economy currency ID to give. |
| `amount` | Expression | ✅ | — | — | The amount of currency to give. Supports expressions. |

## Configuration Example

```yaml
- id: give_edprison_economy
  args:
    amount: 100 # The amount of economy to give
    type: blocks # The ID of the economy type
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
