---
title: blink
titleZh: blink
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# blink <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleports the player forward in the direction they are looking, stopping at solid blocks

## Overview

| Property | Value |
|----------|-------|
| Type ID | `blink` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `distance` | The maximum number of blocks to teleport forward |

## Configuration Example

```yaml
- id: blink
  args:
    distance: 10 # The maximum number of blocks to teleport forward
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
