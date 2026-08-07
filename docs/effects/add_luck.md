---
title: add_luck
titleZh: add_luck
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_luck <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Adds luck

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_luck` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of luck to add |

## Configuration Example

```yaml
- id: add_luck
  args:
    amount: 1.5 # The amount of luck to add
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
