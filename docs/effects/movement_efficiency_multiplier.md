---
title: movement_efficiency_multiplier
titleZh: movement_efficiency_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# movement_efficiency_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies movement speed through difficult terrain

## Overview

| Property | Value |
|----------|-------|
| Type ID | `movement_efficiency_multiplier` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The movement efficiency multiplier to apply (e.g. 2 = double efficiency). Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMovementEfficiencyMultiplier.kt`).

- **Source Description**: Multiplies the player's movement efficiency, reducing the speed penalty from blocks like soul sand.
- **Categories**: `movement`, `player`, `attribute`

## Configuration Example

```yaml
- id: movement_efficiency_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement efficiency
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
