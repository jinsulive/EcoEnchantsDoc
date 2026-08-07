---
title: set_custom_model_data
titleZh: set_custom_model_data
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_custom_model_data <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Set the item's custom model data

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_custom_model_data` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `model` | The custom model data ID |

## Configuration Example

```yaml
- id: set_custom_model_data
  args:
    model: 16 # The custom model data ID
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
