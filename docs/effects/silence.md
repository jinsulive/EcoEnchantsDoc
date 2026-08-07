---
title: silence
titleZh: silence
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# silence <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Silences an entity so it cannot make sounds for a duration

## Overview

| Property | Value |
|----------|-------|
| Type ID | `silence` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `ticks` | The duration in ticks to silence the entity |

## Configuration Example

```yaml
- id: silence
  args:
    ticks: 100 # The duration in ticks to silence the entity
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
