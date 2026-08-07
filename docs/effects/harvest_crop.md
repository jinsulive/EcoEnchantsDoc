---
title: harvest_crop
titleZh: harvest_crop
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# harvest_crop <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Harvests a crop block and resets it to age 0

## Overview

| Property | Value |
|----------|-------|
| Type ID | `harvest_crop` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `only_fully_grown` | Whether to only harvest fully grown crops |

## Configuration Example

```yaml
- id: harvest_crop
  args:
    only_fully_grown: true # Whether to only harvest fully grown crops
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
