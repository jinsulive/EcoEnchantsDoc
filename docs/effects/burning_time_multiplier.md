---
title: burning_time_multiplier
titleZh: burning_time_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# burning_time_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies how long an entity is on fire after being ignited

## Overview

| Property | Value |
|----------|-------|
| Type ID | `burning_time_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for burning time |

## Configuration Example

```yaml
- id: burning_time_multiplier
  args:
    multiplier: 2 # The multiplier for burning time
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
