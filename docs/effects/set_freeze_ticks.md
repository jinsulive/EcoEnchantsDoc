---
title: set_freeze_ticks
titleZh: set_freeze_ticks
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_freeze_ticks <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the victims freeze ticks (frost / powdered snow effect)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_freeze_ticks` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `ticks` | The ticks to set (How long the victim has been in snow) |

## Configuration Example

```yaml
- id: set_freeze_ticks
  args:
    ticks: 20 # The ticks to set (How long the victim has been in snow)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
