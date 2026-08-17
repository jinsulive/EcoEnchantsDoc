---
title: reel_speed_multiplier
titleZh: reel_speed_multiplier
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# reel_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the speed at which caught fish or entities are reeled in.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `reel_speed_multiplier` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. Inherited from the `MultiplierEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectReelSpeedMultiplier.kt`).

- **Source Description**: Multiplies the speed at which caught fish or entities are reeled in.
- **Categories**: `player`

## Configuration Example

```yaml
- id: reel_speed_multiplier
  args:
    multiplier: 1.2 # The multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
