---
title: telekinesis
titleZh: telekinesis
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# telekinesis <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Teleports all drops to the player's inventory

## Overview

| Property | Value |
|----------|-------|
| Type ID | `telekinesis` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `on_tamed_mob_kills` | If telekinesis will also work for tamed mob kills |

## Configuration Example

```yaml
- id: telekinesis
  args:
    on_tamed_mob_kills: false # If telekinesis will also work for tamed mob kills
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
