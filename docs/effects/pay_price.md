---
title: pay_price
titleZh: pay_price
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# pay_price <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Pay a price

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pay_price` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `value` | The value of the price |
| `type` | The price type |

## Configuration Example

```yaml
- id: pay_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
