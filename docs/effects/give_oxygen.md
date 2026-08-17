---
title: give_oxygen
titleZh: give_oxygen
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_oxygen <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Restores a set number of air ticks (oxygen) to the player's air supply.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_oxygen` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The number of air ticks to add to the player's remaining air. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveOxygen.kt`).

- **Source Description**: Restores a set number of air ticks (oxygen) to the player's air supply.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: give_oxygen
  args:
    amount: 1 # The amount of oxygen to give (supports negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
