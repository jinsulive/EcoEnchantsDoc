---
title: crit_multiplier
titleZh: crit_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# crit_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies critical (falling) hit damage

## Overview

| Property | Value |
|----------|-------|
| Type ID | `crit_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The damage multiplier applied on a critical hit. Supports expressions. Example: `1.5 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCritMultiplier.kt`).

- **Source Description**: Multiplies damage when the player lands a critical hit (falling attack).
- **Categories**: `combat`
- **Requires Trigger Data**: `PLAYER`, `EVENT`

## Configuration Example

```yaml
- id: crit_multiplier
  args:
    multiplier: 3 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
