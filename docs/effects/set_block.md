---
title: set_block
titleZh: set_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# set_block <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Set a block

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_block` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `block` | The block to set to |

## Configuration Example

```yaml
- id: set_block
  args:
    block: diamond_ore # The block to set to
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
