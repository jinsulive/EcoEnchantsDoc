---
title: multiply_magic
titleZh: multiply_magic
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_magic <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiply magic

> **Requires:** EcoSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_magic` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The magic type to multiply |
| `multiplier` | The amount to multiply it by |

## Configuration Example

```yaml
- id: multiply_magic
  args:
    type: magic # The magic type to multiply
    multiplier: 0.5 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
