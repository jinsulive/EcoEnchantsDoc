---
title: mining_efficiency
titleZh: mining_efficiency
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mining_efficiency <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Adds mining efficiency (mining speed when using the correct tool)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mining_efficiency` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The extra mining efficiency \| Source: The flat amount of mining efficiency to add. Supports expressions. Example: `%level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMiningEfficiency.kt`).

- **Source Description**: Increases the player's mining efficiency attribute while the holder is active.
- **Categories**: `world`, `player`, `attribute`

## Configuration Example

```yaml
- id: mining_efficiency
  args:
    amount: 5 # The extra mining efficiency
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
