---
title: give_money
titleZh: give_money
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_money <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives a player money

> **Requires:** Vault

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_money` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of money to give |

## Configuration Example

```yaml
- id: give_money
  args:
    amount: 1000 # The amount of money to give
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
