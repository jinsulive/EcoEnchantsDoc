---
title: safe_fall_distance
titleZh: safe_fall_distance
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# safe_fall_distance <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Increases/decreases the distance you can fall without taking damage

## Overview

| Property | Value |
|----------|-------|
| Type ID | `safe_fall_distance` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `distance` | Expression(数学表达式) | ✅ | — | — | The number of extra blocks the player can fall safely. Supports expressions. Example: `%level% * 0.5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSafeFallDistance.kt`).

- **Source Description**: Increases the player's safe fall distance, reducing fall damage taken.
- **Categories**: `movement`, `player`, `attribute`

## Configuration Example

```yaml
- id: safe_fall_distance
  args:
    distance: 10.5 # The extra distance
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
