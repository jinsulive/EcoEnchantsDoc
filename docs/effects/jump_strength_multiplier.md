---
title: jump_strength_multiplier
titleZh: jump_strength_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# jump_strength_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies jump strength

## Overview

| Property | Value |
|----------|-------|
| Type ID | `jump_strength_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for jump strength \| Source: The jump strength multiplier to apply. Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectJumpStrengthMultiplier.kt`).

- **Source Description**: Multiplies the player's jump strength, making them jump higher or lower.
- **Categories**: `movement`, `player`, `attribute`

## Configuration Example

```yaml
- id: jump_strength_multiplier
  args:
    multiplier: 2.1 # The multiplier for jump strength
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
