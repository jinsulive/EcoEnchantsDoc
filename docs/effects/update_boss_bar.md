---
title: update_boss_bar
titleZh: update_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# update_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Updates a boss bar

## Overview

| Property | Value |
|----------|-------|
| Type ID | `update_boss_bar` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `id` | String | ✅ | — | — | The ID of the boss bar to update. Example: `boss_%player_name%` |
| `name` | String | — | `` | — | The new display name of the boss bar. Supports placeholders. Example: `%player_name%'s Boss` |
| `color` | String | — | `` | — | The new color of the boss bar (e.g. BLUE, RED). Example: `RED` |
| `style` | String | — | `` | — | The new overlay style of the boss bar (e.g. PROGRESS, NOTCHED_10). Example: `NOTCHED_10` |
| `progress` | Expression(数学表达式) | — | `` | — | The new progress value (0–100). Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectUpdateBossBar.kt`).

- **Source Description**: Updates the properties of an existing boss bar created by create_boss_bar.
- **Categories**: `visual`

## Configuration Example

```yaml
- id: update_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar to update
    name: "Updated Boss Bar" # (Optional) The new name of the boss bar
    color: pink # (Optional) The new boss bar color (pink, blue, red, green, yellow, purple, white)
    style: notched_6 # (Optional) The new boss bar style (progress, notched_6, notched_10, notched_12, notched_20)
    progress: "%libreforge_boss_bar_my_boss_bar_progress% + 10" # (Optional) The new percentage completion of the boss bar
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
