---
title: chain_lightning
titleZh: chain_lightning
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# chain_lightning <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Strikes chain lightning that jumps between nearby entities

## Overview

| Property | Value |
|----------|-------|
| Type ID | `chain_lightning` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `jumps` | The number of times the lightning jumps |
| `range` | The range in blocks to look for the next target |
| `damage` | The damage dealt to each entity hit |

## Configuration Example

```yaml
- id: chain_lightning
  args:
    jumps: 3 # The number of times the lightning jumps
    range: 6 # The range in blocks to look for the next target
    damage: 3.0 # The damage dealt to each entity hit
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
