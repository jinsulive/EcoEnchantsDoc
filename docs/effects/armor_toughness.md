---
title: armor_toughness
titleZh: armor_toughness
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# armor_toughness <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Gives armor toughness

## Overview

| Property | Value |
|----------|-------|
| Type ID | `armor_toughness` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `points` | Expression(数学表达式) | ✅ | — | — | The number of armor toughness points to add (or subtract if negative). Supports expressions. Example: `%level% * 0.25` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectArmorToughness.kt`).

- **Source Description**: Permanently increases or decreases the player's armor toughness attribute while the holder is active.
- **Categories**: `combat`, `player`, `attribute`

## Configuration Example

```yaml
- id: armor_toughness
  args:
    points: 8 # The amount of armor toughness points to give
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
