---
title: hunger_multiplier
titleZh: hunger_multiplier
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# hunger_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies hunger loss

## Overview

| Property | Value |
|----------|-------|
| Type ID | `hunger_multiplier` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for hunger loss, smaller means slower loss |

## Configuration Example

```yaml
- id: hunger_multiplier
  args:
    multiplier: 0.5 # The multiplier for hunger loss, smaller means slower loss
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
