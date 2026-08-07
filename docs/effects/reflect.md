---
title: reflect
titleZh: reflect
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# reflect <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Reflects a portion of incoming damage back to the attacker

## Overview

| Property | Value |
|----------|-------|
| Type ID | `reflect` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The fraction of incoming damage to reflect |

## Configuration Example

```yaml
- id: reflect
  args:
    multiplier: 0.5 # The fraction of incoming damage to reflect
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
