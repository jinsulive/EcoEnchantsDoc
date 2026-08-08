---
title: blink
titleZh: blink
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# blink <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleports the player forward in the direction they are looking, stopping at solid blocks

## Overview

| Property | Value |
|----------|-------|
| Type ID | `blink` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `distance` | Expression(数学表达式) | ✅ | — | — | The maximum number of blocks to teleport forward \| Source: The maximum number of blocks to teleport forward. Supports expressions. Example: `5 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBlink.kt`).

- **Source Description**: Teleports the player forward in their look direction, stopping at solid blocks.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: blink
  args:
    distance: 10 # The maximum number of blocks to teleport forward
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
