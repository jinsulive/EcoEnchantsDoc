---
title: create_boss_bar
titleZh: create_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# create_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Creates a boss bar and shows it to the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `create_boss_bar` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `id` | String | ✅ | — | — | The ID of the boss bar \| Source: A unique identifier used to reference this boss bar with update_boss_bar or remove_boss_bar. |
| `name` | String | ✅ | — | — | The name of the boss bar \| Source: The display text shown on the boss bar. Supports placeholders. Example: `&6%player%'s Charge` |
| `color` | String | ✅ | — | `BLUE`, `GREEN`, `PINK`, `PURPLE`, `RED`, `WHITE`, `YELLOW` | The boss bar color (pink, blue, red, green, yellow, purple, white) \| Source: The boss bar color. |
| `style` | String | ✅ | — | `PROGRESS`, `NOTCHED_6`, `NOTCHED_10`, `NOTCHED_12`, `NOTCHED_20` | The boss bar style (progress, notched_6, notched_10, notched_12, notched_20) \| Source: The boss bar overlay style. |
| `progress` | Expression(数学表达式) | ✅ | — | — | The percentage completion of the boss bar \| Source: The fill percentage of the boss bar, from 0 to 100. Supports expressions. Example: `50 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCreateBossBar.kt`).

- **Source Description**: Creates and displays a boss bar for the player.
- **Categories**: `visual`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: create_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar
    name: "Example Boss Bar" # The name of the boss bar
    color: white # The boss bar color (pink, blue, red, green, yellow, purple, white)
    style: progress # The boss bar style (progress, notched_6, notched_10, notched_12, notched_20)
    progress: 100 # The percentage completion of the boss bar
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
