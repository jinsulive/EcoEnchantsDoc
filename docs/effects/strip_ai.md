---
title: strip_ai
titleZh: strip_ai
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# strip_ai <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Strips a mob's AI temporarily

## Overview

| Property | Value |
|----------|-------|
| Type ID | `strip_ai` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `duration` | The amount of ticks to strip AI for |

## Configuration Example

```yaml
- id: strip_ai
  args:
    duration: 60 # The amount of ticks to strip AI for
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
