---
title: age_crop
titleZh: age_crop
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# age_crop <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Advances a crop's growth by a number of stages.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `age_crop` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `age` | Expression | — | `1` | — | The number of growth stages to advance. Supports expressions. Example: `1 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAgeCrop.kt`).

- **Source Description**: Advances a crop's growth by a number of stages.
- **Categories**: `world`
- **Requires Trigger Data**: `BLOCK`

## Configuration Example

```yaml
- id: age_crop
  args:
    age: 2 # (Optional) The amount to age by
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
