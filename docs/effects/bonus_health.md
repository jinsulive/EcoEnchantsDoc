---
title: bonus_health
titleZh: bonus_health
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# bonus_health <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Gives extra health

## Overview

| Property | Value |
|----------|-------|
| Type ID | `bonus_health` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `health` | The amount of health to give, one heart is 2 HP |

## Configuration Example

```yaml
- id: bonus_health
  args:
    health: 4 # The amount of health to give, one heart is 2 HP
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
