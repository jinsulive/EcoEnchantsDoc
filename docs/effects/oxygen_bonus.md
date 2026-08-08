---
title: oxygen_bonus
titleZh: oxygen_bonus
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# oxygen_bonus <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Adds oxygen bonus

## Overview

| Property | Value |
|----------|-------|
| Type ID | `oxygen_bonus` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The flat amount of oxygen bonus to add. Supports expressions. Example: `%level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectOxygenBonus.kt`).

- **Source Description**: Permanently adds bonus oxygen (air bubbles) to the player while the holder is active.
- **Categories**: `player`, `attribute`

## Configuration Example

```yaml
- id: oxygen_bonus
  args:
    amount: 1.5 # The amount of oxygen bonus to add
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
