---
title: time_bomb
titleZh: time_bomb
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# time_bomb <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Marks the victim to explode after a fuse delay, with an optional glow effect while the timer counts down.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `time_bomb` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `fuse` | Expression | ✅ | — | — | How many ticks before the explosion occurs. Supports expressions. Example: `20 * %level%` |
| `power` | Expression | ✅ | — | — | The power of the explosion. Vanilla TNT is 4. Supports expressions. |
| `break_blocks` | Boolean | — | `false` | — | Whether the explosion breaks blocks. |
| `glow` | Boolean | — | `true` | — | Whether the victim glows while waiting for the explosion. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTimeBomb.kt`).

- **Source Description**: Marks the victim to explode after a fuse delay, with an optional glow effect while the timer counts down.
- **Categories**: `combat`, `world`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: time_bomb
  args:
    fuse: 60 # The delay in ticks before the explosion
    power: 3.0 # The explosion power
    break_blocks: false # (Optional) Whether the explosion breaks blocks, defaults to false
    glow: true # (Optional) Whether the entity glows while the fuse is active, defaults to true
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
