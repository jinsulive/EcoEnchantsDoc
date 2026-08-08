---
title: set_saturation
titleZh: set_saturation
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_saturation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the player's saturation

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_saturation` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The saturation level to set for the player. Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetSaturation.kt`).

- **Source Description**: Sets the player's food saturation to a specific value.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: set_saturation
  args:
    amount: 10.0 # The saturation level to set
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
