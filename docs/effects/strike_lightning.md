---
title: strike_lightning
titleZh: strike_lightning
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# strike_lightning <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Strikes lightning at a point

## Overview

| Property | Value |
|----------|-------|
| Type ID | `strike_lightning` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of lightning strikes |

## Configuration Example

```yaml
- id: strike_lightning
  args:
    amount: 5 # The amount of lightning strikes
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
