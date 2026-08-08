---
title: increase_step_height
titleZh: increase_step_height
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# increase_step_height <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Increases the amount of blocks you can walk over without jumping

## Overview

| Property | Value |
|----------|-------|
| Type ID | `increase_step_height` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `height` | Expression(数学表达式) | ✅ | — | — | The extra step height \| Source: The number of extra blocks the player can step up automatically. Supports expressions. Example: `0.5 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectIncreaseStepHeight.kt`).

- **Source Description**: Increases the player's step height, allowing them to walk up taller blocks without jumping.
- **Categories**: `movement`, `player`, `attribute`

## Configuration Example

```yaml
- id: increase_step_height
  args:
    height: 1 # The extra step height
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
