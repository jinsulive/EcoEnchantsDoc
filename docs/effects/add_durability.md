---
title: add_durability
titleZh: add_durability
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_durability <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Increase the max durability of an item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_durability` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `durability` | The durability to add (or subtract) |

## Configuration Example

```yaml
- id: add_durability
  args:
    durability: 100 # The durability to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
