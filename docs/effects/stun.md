---
title: stun
titleZh: stun
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# stun <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Prevents an entity from moving by zeroing its velocity each tick for a duration

## Overview

| Property | Value |
|----------|-------|
| Type ID | `stun` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `ticks` | The duration in ticks to stun the entity |

## Configuration Example

```yaml
- id: stun
  args:
    ticks: 60 # The duration in ticks to stun the entity
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
