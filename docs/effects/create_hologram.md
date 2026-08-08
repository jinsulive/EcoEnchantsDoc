---
title: create_hologram
titleZh: create_hologram
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# create_hologram <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Creates a hologram temporarily (Requires a hologram plugin to be installed)

> **Requires:** 无（需安装 hologram 插件）

## Overview

| Property | Value |
|----------|-------|
| Type ID | `create_hologram` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `text` | String List | ✅ | — | — | The lines of text to show on the hologram. Supports placeholders. Example: `&6%player%, &7Level %level%` |
| `duration` | Expression(数学表达式) | ✅ | — | — | How long to show the hologram, in ticks. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCreateHologram.kt`).

- **Source Description**: Creates a temporary hologram at the trigger location.
- **Categories**: `visual`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: create_hologram
  args:
      text: # The text in the hologram
          - "&FThis is a hologram!"
          - "&cThis is a second line."
      duration: 40 # The duration (in ticks)
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
