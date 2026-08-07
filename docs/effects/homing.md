---
title: homing
titleZh: homing
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# homing <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Makes projectiles hone in onto entities (homing arrows / tridents)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `homing` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `distance` | The distance to hone in from |
| `targets` | The whitelist of entities to target |

## Configuration Example

```yaml
- id: homing
  args:
      distance: 10 # The distance to hone in from
      targets: # (Optional) The whitelist of entities to target
        - zombie
        - skeleton
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
