---
title: extinguish
titleZh: extinguish
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# extinguish <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Immediately extinguishes any fire on the player.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `extinguish` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| — | — | — | — | — | This component takes no parameters. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectExtinguish.kt`).

- **Source Description**: Immediately extinguishes any fire on the player.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: extinguish
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
