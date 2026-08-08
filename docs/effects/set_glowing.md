---
title: set_glowing
titleZh: set_glowing
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# set_glowing <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets an entity's glowing state, optionally reverting it after a duration

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_glowing` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `glowing` | Boolean | — | `true` | — | (Optional) Whether to enable glowing, defaults to true \| Source: Whether to enable or disable the glowing effect. |
| `duration` | Expression(数学表达式) | — | — | — | (Optional) Ticks before the glowing state is reverted \| Source: How long to apply the glow, in ticks. Reverts when expired. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetGlowing.kt`).

- **Source Description**: Makes the target entity glow, optionally reverting after a duration.
- **Categories**: `visual`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: set_glowing
  args:
    glowing: true # (Optional) Whether to enable glowing, defaults to true
    duration: 100 # (Optional) Ticks before the glowing state is reverted
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
