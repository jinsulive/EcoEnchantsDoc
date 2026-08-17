---
title: brew_time_multiplier
titleZh: brew_time_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# brew_time_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the time taken to brew potions while the holder is active.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `brew_time_multiplier` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. Inherited from the `MultiplierEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBrewTimeMultiplier.kt`).

- **Source Description**: Multiplies the time taken to brew potions while the holder is active.
- **Categories**: `player`

## Configuration Example

```yaml
- id: brew_time_multiplier
  args:
    multiplier: 0.8 # The multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
