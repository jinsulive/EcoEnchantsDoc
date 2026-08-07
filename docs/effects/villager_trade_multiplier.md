---
title: villager_trade_multiplier
titleZh: villager_trade_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# villager_trade_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the cost of villager trades

## Overview

| Property | Value |
|----------|-------|
| Type ID | `villager_trade_multiplier` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for villager trade costs |

## Configuration Example

```yaml
- id: villager_trade_multiplier
  args:
    multiplier: 0.5 # The multiplier for villager trade costs
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
