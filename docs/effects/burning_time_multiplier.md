---
title: burning_time_multiplier
titleZh: burning_time_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# burning_time_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies how long an entity is on fire after being ignited

## Overview

| Property | Value |
|----------|-------|
| Type ID | `burning_time_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for burning time \| Source: The burning time multiplier. Values below 1 reduce burn duration. Supports expressions. Example: `1 - %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBurningTimeMultiplier.kt`).

- **Source Description**: Multiplies the duration the player burns when on fire while the holder is active.
- **Categories**: `combat`, `player`, `attribute`

## Configuration Example

```yaml
- id: burning_time_multiplier
  args:
    multiplier: 2 # The multiplier for burning time
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
