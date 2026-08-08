---
title: set_armor_trim
titleZh: set_armor_trim
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_armor_trim <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets item armor trim

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_armor_trim` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `pattern` | String | ✅ | — | — | The pattern \| Source: The trim pattern to apply, e.g. 'sentry' or 'dune'. Example: `sentry` |
| `material` | String | ✅ | — | — | The material \| Source: The trim material to apply, e.g. 'gold' or 'diamond'. Example: `diamond` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetArmorTrim.kt`).

- **Source Description**: Applies an armor trim with the specified pattern and material to the triggering item.
- **Categories**: `inventory`
- **Requires Trigger Data**: `ITEM`

## Configuration Example

```yaml
- id: set_armor_trim
  args:
    pattern: rib # The pattern
    material: amethyst # The material
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
