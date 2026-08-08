---
title: dont_consume_xp_chance
titleZh: dont_consume_xp_chance
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# dont_consume_xp_chance <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Prevents consuming xp when enchanting items

## Overview

| Property | Value |
|----------|-------|
| Type ID | `dont_consume_xp_chance` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `chance` | Custom | — | — | — | The chance to not consume xp |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDontConsumeXpChance.kt`).

- **Source Description**: Gives a percentage chance for the enchanting table to not consume experience levels.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: dont_consume_xp_chance
  args:
    chance: 20 # The chance to not consume xp
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
