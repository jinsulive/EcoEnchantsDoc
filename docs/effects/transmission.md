---
title: transmission
titleZh: transmission
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# transmission <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleport a player forward in the direction they're facing (Like AotE)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `transmission` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `distance` | The distance to teleport |

## Configuration Example

```yaml
- id: transmission
  args:
    distance: 5 # The distance to teleport
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
