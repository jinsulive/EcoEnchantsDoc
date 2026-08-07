---
title: piercing
titleZh: piercing
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# piercing <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Makes projectiles pass through other entities (collaterals), like the Piercing enchantment.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `piercing` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `level` | The piercing level, i.e. the amount of entities that the projectile should go through |

## Configuration Example

```yaml
- id: piercing
  args:
      level: 3 # The piercing level, i.e. the amount of entities that the projectile should go through
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
