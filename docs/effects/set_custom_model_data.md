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

> Sets the custom model data value on the triggering item.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_custom_model_data` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `model` | Expression | ✅ | — | — | The custom model data integer to apply to the item. Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetCustomModelData.kt`).

- **Source Description**: Sets the custom model data value on the triggering item.
- **Categories**: `inventory`
- **Requires Trigger Data**: `ITEM`

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
