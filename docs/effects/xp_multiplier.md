---
title: xp_multiplier
titleZh: xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies incoming xp gain

## Overview

| Property | Value |
|----------|-------|
| Type ID | `xp_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The xp multiplier |

## Configuration Example

```yaml
- id: xp_multiplier
  args:
    multiplier: 2.05 # The xp multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
