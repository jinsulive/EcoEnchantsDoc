---
title: pull_in
titleZh: pull_in
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# pull_in <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Pull the victim towards the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pull_in` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `velocity` | Expression(数学表达式) | ✅ | — | — | The speed at which to be pulled (magnitude of the velocity vector) \| Source: The strength of the pull force applied to the victim. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPullIn.kt`).

- **Source Description**: Pulls the victim toward the player with a specified velocity.
- **Categories**: `movement`, `combat`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`

## Configuration Example

```yaml
- id: pull_in
  args:
    velocity: 0.2 # The speed at which to be pulled (magnitude of the velocity vector)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
