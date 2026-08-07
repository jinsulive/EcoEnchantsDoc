---
title: trigger_custom
titleZh: trigger_custom
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# trigger_custom <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Call a custom trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `trigger_custom` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `trigger` | The custom trigger ID: use in other effects like custom_id (i.e. custom_example here) |
| `value` | The value to pass to the trigger, e.g. for EcoPets levelling. |

## Configuration Example

```yaml
- id: trigger_custom
  args:
    trigger: example # The custom trigger ID: use in other effects like custom_id (i.e. custom_example here)
    value: 1.5 # The value to pass to the trigger, e.g. for EcoPets levelling.
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
