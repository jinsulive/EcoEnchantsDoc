---
title: age_crop
titleZh: age_crop
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# age_crop <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> If the block is a crop, age it by a certain amount

## Overview

| Property | Value |
|----------|-------|
| Type ID | `age_crop` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `age` | The amount to age by |

## Configuration Example

```yaml
- id: age_crop
  args:
    age: 2 # (Optional) The amount to age by
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
