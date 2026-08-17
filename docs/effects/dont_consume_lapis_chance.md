---
title: dont_consume_lapis_chance
titleZh: dont_consume_lapis_chance
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# dont_consume_lapis_chance <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Gives a percentage chance for the enchanting table to not consume lapis lazuli.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `dont_consume_lapis_chance` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `chance` | Expression | ✅ | — | — | The percentage chance (0–100) for this effect to activate. Supports expressions. Inherited from the `ChanceMultiplierEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDontConsumeLapisChance.kt`).

- **Source Description**: Gives a percentage chance for the enchanting table to not consume lapis lazuli.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: dont_consume_lapis_chance
  args:
    chance: 20 # The chance to not consume lapis
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
