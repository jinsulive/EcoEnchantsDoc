---
title: crit_multiplier
titleZh: crit_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# crit_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies critical (falling) hit damage

## Overview

| Property | Value |
|----------|-------|
| Type ID | `crit_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier |

## Configuration Example

```yaml
- id: crit_multiplier
  args:
    multiplier: 3 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
