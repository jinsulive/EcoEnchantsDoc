---
title: give_absorption
titleZh: give_absorption
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_absorption <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Adds absorption points to the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_absorption` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The number of absorption hearts to add. Supports expressions. Example: `%level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveAbsorption.kt`).

- **Source Description**: Grants the player additional absorption hearts, expanding the max absorption cap if needed.
- **Categories**: `player`, `attribute`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: give_absorption
  args:
    amount: 4 # The number of absorption points to add
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
