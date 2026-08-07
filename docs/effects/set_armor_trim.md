---
title: set_armor_trim
titleZh: set_armor_trim
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_armor_trim <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets item armor trim

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_armor_trim` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `pattern` | The pattern |
| `material` | The material |

## Configuration Example

```yaml
- id: set_armor_trim
  args:
    pattern: rib # The pattern
    material: amethyst # The material
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
