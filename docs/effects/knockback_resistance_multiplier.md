---
title: knockback_resistance_multiplier
titleZh: knockback_resistance_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# knockback_resistance_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the player's knockback resistance, reducing how far they are pushed when hit.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `knockback_resistance_multiplier` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The knockback resistance multiplier to apply. Supports expressions. Example: `%level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKnockbackResistanceMultiplier.kt`).

- **Source Description**: Multiplies the player's knockback resistance, reducing how far they are pushed when hit.
- **Categories**: `combat`, `player`, `attribute`

## Configuration Example

```yaml
- id: knockback_resistance_multiplier
  args:
    multiplier: 2 # The multiplier for knockback resistance
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
