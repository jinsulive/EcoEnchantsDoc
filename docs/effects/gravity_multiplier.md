---
title: gravity_multiplier
titleZh: gravity_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# gravity_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies gravity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gravity_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The gravity multiplier to apply. Supports expressions. Example: `1 - %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGravityMultiplier.kt`).

- **Source Description**: Multiplies the player's gravity, making them fall faster or slower.
- **Categories**: `movement`, `player`, `attribute`

## Configuration Example

```yaml
- id: gravity_multiplier
  args:
    multiplier: 0.5 # The multiplier for gravity
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
