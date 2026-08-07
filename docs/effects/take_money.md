---
title: take_money
titleZh: take_money
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# take_money <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Takes money from the player

> **Requires:** Vault

## Overview

| Property | Value |
|----------|-------|
| Type ID | `take_money` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of money to take |

## Configuration Example

```yaml
- id: take_money
  args:
    amount: 1000 # The amount of money to take
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
