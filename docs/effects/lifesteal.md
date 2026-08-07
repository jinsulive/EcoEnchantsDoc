---
title: lifesteal
titleZh: lifesteal
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# lifesteal <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Heals the player for a portion of the trigger's value (e.g. damage dealt)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lifesteal` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The fraction of the trigger value to heal |

## Configuration Example

```yaml
- id: lifesteal
  args:
    multiplier: 0.5 # The fraction of the trigger value to heal
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
