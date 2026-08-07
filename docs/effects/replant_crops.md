---
title: replant_crops
titleZh: replant_crops
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# replant_crops <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Automatically replants crops

## Overview

| Property | Value |
|----------|-------|
| Type ID | `replant_crops` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `consume_seeds` | If seeds should be used when replanting crops |
| `only_fully_grown` | If only fully grown crops should be replanted |

## Configuration Example

```yaml
- id: replant_crops
  args:
    consume_seeds: true # If seeds should be used when replanting crops
    only_fully_grown: true # If only fully grown crops should be replanted
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
