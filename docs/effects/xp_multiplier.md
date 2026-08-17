---
title: xp_multiplier
titleZh: xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the amount of XP the player gains from natural sources and telekinesis drops.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `xp_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. Inherited from the `MultiplierEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectXpMultiplier.kt`).

- **Source Description**: Multiplies the amount of XP the player gains from natural sources and telekinesis drops.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: xp_multiplier
  args:
    multiplier: 2.05 # The xp multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
