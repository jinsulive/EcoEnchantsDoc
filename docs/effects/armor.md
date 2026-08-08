---
title: armor
titleZh: armor
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# armor <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Gives armor points

## Overview

| Property | Value |
|----------|-------|
| Type ID | `armor` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `points` | Expression(数学表达式) | ✅ | — | — | The amount of points of armor to give \| Source: The number of armor points to add (or subtract if negative). Supports expressions. Example: `%level% * 0.5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectArmor.kt`).

- **Source Description**: Permanently increases or decreases the player's armor attribute while the holder is active.
- **Categories**: `combat`, `player`, `attribute`

## Configuration Example

```yaml
- id: armor
  args:
    points: 4 # The amount of points of armor to give
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
