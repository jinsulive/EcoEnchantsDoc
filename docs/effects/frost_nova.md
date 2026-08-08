---
title: frost_nova
titleZh: frost_nova
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# frost_nova <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Freezes and slows nearby entities in a radius

## Overview

| Property | Value |
|----------|-------|
| Type ID | `frost_nova` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius in blocks \| Source: The radius around the trigger location in which entities are frozen. Supports expressions. Example: `5 + %level% * 0.5` |
| `freeze_ticks` | Expression(数学表达式) | ✅ | — | — | The number of ticks to freeze entities \| Source: How many ticks the affected entities are frozen for. Supports expressions. Example: `20 * %level%` |
| `slow_duration` | Expression(数学表达式) | — | `0` | — | The duration in ticks to apply slowness \| Source: Duration in ticks of the slowness effect applied alongside freezing. Defaults to 0 (no slowness). Example: `20 * %level%` |
| `slow_amplifier` | Expression(数学表达式) | — | `0` | — | The amplifier of the slowness effect \| Source: Amplifier level of the slowness effect (0 = Slowness I). Defaults to 0. Example: `%level% / 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectFrostNova.kt`).

- **Source Description**: Freezes all nearby entities within a radius, optionally also applying a slowness effect.
- **Categories**: `combat`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: frost_nova
  args:
    radius: 5 # The radius in blocks
    freeze_ticks: 60 # The number of ticks to freeze entities
    slow_duration: 100 # (Optional) The duration in ticks to apply slowness
    slow_amplifier: 1 # (Optional) The amplifier of the slowness effect
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
