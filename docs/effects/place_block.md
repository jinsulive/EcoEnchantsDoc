---
title: place_block
titleZh: place_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# place_block <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Places a block at the trigger location, optionally reverting it after a duration.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `place_block` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `block` | Block | ✅ | — | — | The block to place at the trigger location. |
| `duration` | Expression | — | — | — | How many ticks before the block reverts to its original state. Omit to place permanently. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPlaceBlock.kt`).

- **Source Description**: Places a block at the trigger location, optionally reverting it after a duration.
- **Categories**: `world`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: place_block
  args:
    block: stone # The block to place (eco block ID)
    duration: 60 # (Optional) Ticks before the original block is restored
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
