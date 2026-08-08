---
title: transmission
titleZh: transmission
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# transmission <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleport a player forward in the direction they're facing (Like AotE)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `transmission` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `distance` | Expression(数学表达式) | ✅ | — | — | The distance to teleport \| Source: The maximum distance to teleport the player forward. Supports expressions. Example: `10 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTransmission.kt`).

- **Source Description**: Teleports the player forward by a given distance, stopping at the first solid block in the path.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: transmission
  args:
    distance: 5 # The distance to teleport
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
