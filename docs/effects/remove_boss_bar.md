---
title: remove_boss_bar
titleZh: remove_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# remove_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes a boss bar

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_boss_bar` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `id` | String | ✅ | — | — | The ID of the boss bar to remove \| Source: The unique ID of the boss bar to remove. Supports placeholders. Example: `boss_%player_name%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveBossBar.kt`).

- **Source Description**: Removes a currently displayed boss bar by its ID.
- **Categories**: `visual`

## Configuration Example

```yaml
- id: remove_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
