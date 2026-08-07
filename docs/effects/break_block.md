---
title: break_block
titleZh: break_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# break_block <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Breaks a block instantly

## Overview

| Property | Value |
|----------|-------|
| Type ID | `break_block` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `prevent_trigger` | If the mine_block trigger should not be called from this |

## Configuration Example

```yaml
- id: break_block
  args:
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
