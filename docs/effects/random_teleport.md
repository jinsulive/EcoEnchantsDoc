---
title: random_teleport
titleZh: random_teleport
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# random_teleport <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleports the player to a random location within a radius

## Overview

| Property | Value |
|----------|-------|
| Type ID | `random_teleport` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression(数学表达式) | ✅ | — | — | The maximum distance in blocks from the player \| Source: The maximum distance from the player's current position to teleport. Supports expressions. Example: `10 + %level%` |
| `min_radius` | Expression(数学表达式) | — | `0` | — | (Optional) The minimum distance in blocks from the player \| Source: The minimum distance from the player's current position to teleport. Supports expressions. Example: `%level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRandomTeleport.kt`).

- **Source Description**: Teleports the player to a random location within a radius, landing on the highest safe block.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: random_teleport
  args:
    radius: 50 # The maximum distance in blocks from the player
    min_radius: 10 # (Optional) The minimum distance in blocks from the player
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
