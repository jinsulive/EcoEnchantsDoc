---
title: add_enchant
titleZh: add_enchant
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Adds an enchant to the item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_enchant` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `enchant` | The ID of the enchant |
| `level` | The level of the enchant |

## Configuration Example

```yaml
- id: add_enchant
  args:
    enchant: razor # The ID of the enchant
    level: 2 # The level of the enchant
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
