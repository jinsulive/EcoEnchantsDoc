---
title: sell_multiplier
titleZh: sell_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# sell_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies money gained from selling items

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sell_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The sell multiplier |

## Configuration Example

```yaml
- id: sell_multiplier
  args:
    multiplier: 1.05 # The sell multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
