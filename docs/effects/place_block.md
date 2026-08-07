---
title: place_block
titleZh: place_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# place_block <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Places a block at a location, optionally reverting it after a duration

## Overview

| Property | Value |
|----------|-------|
| Type ID | `place_block` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `block` | The block to place (eco block ID) |
| `duration` | (Optional) Ticks before the original block is restored |

## Configuration Example

```yaml
- id: place_block
  args:
    block: stone # The block to place (eco block ID)
    duration: 60 # (Optional) Ticks before the original block is restored
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
